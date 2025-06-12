import { createContext, useContext, useState } from 'react';
import { useNotifications } from './NotificationContext';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { showSuccess, showInfo } = useNotifications();

  const addToFavorites = (car) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.id === car.id)) {
        return prev; 
      }
      
      // Mostra notifica di successo
      showSuccess(`${car.title} aggiunto ai preferiti!`, {
        title: 'Preferiti',
        duration: 3000
      });
      
      return [...prev, car];
    });
  };

  const removeFromFavorites = (carId) => {
    const removedCar = favorites.find(car => car.id === carId);
    setFavorites(prev => prev.filter(car => car.id !== carId));
    
    // Mostra notifica di rimozione
    if (removedCar) {
      showInfo(`${removedCar.title} rimosso dai preferiti`, {
        title: 'Preferiti',
        duration: 2500
      });
    }
  };

  const clearAllFavorites = () => {
    const count = favorites.length;
    setFavorites([]);
    
    if (count > 0) {
      showInfo(`Tutti i ${count} preferiti sono stati rimossi`, {
        title: 'Preferiti',
        duration: 3000
      });
    }
  };

  const isFavorite = (carId) => {
    return favorites.some(car => car.id === carId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      clearAllFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve essere usato dentro FavoritesProvider');
  }
  return context;
};