import { createContext, useContext, useState } from "react";
import { fetchCarById } from "../services/api";
import { useNotifications } from './NotificationContext';

const ComparatorContext = createContext();

export function ComparatorProvider({ children }) {
  const [selectedCars, setSelectedCars] = useState([]);
  const { showSuccess, showInfo, showWarning } = useNotifications();

  const addToComparator = async (car) => {
    // Controlla se il comparatore è pieno
    if (selectedCars.length >= 2) {
      showWarning('Il comparatore è pieno! Rimuovi un\'auto per aggiungerne un\'altra.', {
        title: 'Comparatore',
        duration: 4000
      });
      return;
    }

    // Controlla se l'auto è già nel comparatore
    if (selectedCars.find((c) => c.id === car.id)) {
      showInfo(`${car.title} è già nel comparatore`, {
        title: 'Comparatore',
        duration: 3000
      });
      return;
    }

    // Se l'auto ha solo dati base, recupera i dati completi
    let fullCar = car;

    if (!car.brand || !car.year) {
      console.log("Recupero dati completi per auto ID:", car.id);
      try {
        const fullCarData = await fetchCarById(car.id);
        if (fullCarData) {
          fullCar = fullCarData;
          console.log("Dati completi recuperati:", fullCar);
        } else {
          console.warn("Impossibile recuperare dati completi per auto ID:", car.id);
        }
      } catch (error) {
        console.error("Errore nel recupero dati auto:", error);
      }
    }

    setSelectedCars((prev) => {
      const newList = [...prev, fullCar];
      
      // Mostra notifica di successo
      showSuccess(`${fullCar.title} aggiunto al comparatore! (${newList.length}/2)`, {
        title: 'Comparatore',
        duration: 3500
      });

      return newList;
    });
  };

  const removeFromComparator = (carId) => {
    const removedCar = selectedCars.find(car => car.id === carId);
    setSelectedCars((prev) => prev.filter((car) => car.id !== carId));
    
    // Mostra notifica di rimozione
    if (removedCar) {
      showInfo(`${removedCar.title} rimosso dal comparatore`, {
        title: 'Comparatore',
        duration: 2500
      });
    }
  };

  const isInComparator = (carId) => {
    return selectedCars.some((car) => car.id === carId);
  };

  const clearComparator = () => {
    const count = selectedCars.length;
    setSelectedCars([]);
    
    if (count > 0) {
      showInfo(`Comparatore svuotato (rimosse ${count} auto)`, {
        title: 'Comparatore',
        duration: 3000
      });
    }
  };

  const canAddMore = selectedCars.length < 2;

  return (
    <ComparatorContext.Provider
      value={{
        selectedCars,
        addToComparator,
        removeFromComparator,
        isInComparator,
        clearComparator,
        canAddMore,
      }}
    >
      {children}
    </ComparatorContext.Provider>
  );
}

export function useComparator() {
  const context = useContext(ComparatorContext);
  if (!context) {
    throw new Error("useComparator must be used within ComparatorProvider");
  }
  return context;
}
import { useNotifications } from '../contexts/NotificationContext';

const NotificationToast = ({ notification, onRemove }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'info':
      default:
        return 'fas fa-info-circle';
    }
  };

  const getColorClasses = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-500 border-green-600';
      case 'error':
        return 'bg-red-500 border-red-600';
      case 'warning':
        return 'bg-yellow-500 border-yellow-600';
      case 'info':
      default:
        return 'bg-blue-500 border-blue-600';
    }
  };

  return (
    <div 
      className={`
        ${getColorClasses()}
        text-white px-6 py-4 rounded-lg shadow-lg border-l-4 
        transform transition-all duration-300 ease-in-out
        animate-slide-in-right hover:scale-105
        max-w-md w-full
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <i className={`${getIcon()} text-xl`}></i>
          <div className="flex-1">
            {notification.title && (
              <h4 className="font-semibold text-sm mb-1">{notification.title}</h4>
            )}
            <p className="text-sm leading-relaxed">{notification.message}</p>
          </div>
        </div>
        <button
          onClick={() => onRemove(notification.id)}
          className="ml-4 text-white hover:text-gray-200 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};