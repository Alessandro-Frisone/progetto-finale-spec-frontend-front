// src/contexts/ComparatorContext.jsx
import { createContext, useContext, useState } from 'react';
import { fetchCarById } from '../services/api';

const ComparatorContext = createContext();

export function ComparatorProvider({ children }) {
  const [selectedCars, setSelectedCars] = useState([]);

  const addToComparator = async (car) => {
    if (selectedCars.length < 2 && !selectedCars.find(c => c.id === car.id)) {
      // Se l'auto ha solo dati base, recupera i dati completi
      let fullCar = car;
      
      if (!car.brand || !car.year) {
        console.log('Recupero dati completi per auto ID:', car.id);
        try {
          const fullCarData = await fetchCarById(car.id);
          if (fullCarData) {
            fullCar = fullCarData;
            console.log('Dati completi recuperati:', fullCar);
          } else {
            console.warn('Impossibile recuperare dati completi per auto ID:', car.id);
          }
        } catch (error) {
          console.error('Errore nel recupero dati auto:', error);
        }
      }
      
      setSelectedCars(prev => [...prev, fullCar]);
    }
  };

  const removeFromComparator = (carId) => {
    setSelectedCars(prev => prev.filter(car => car.id !== carId));
  };

  const isInComparator = (carId) => {
    return selectedCars.some(car => car.id === carId);
  };

  const clearComparator = () => {
    setSelectedCars([]);
  };

  const canAddMore = selectedCars.length < 2;

  return (
    <ComparatorContext.Provider value={{
      selectedCars,
      addToComparator,
      removeFromComparator,
      isInComparator,
      clearComparator,
      canAddMore
    }}>
      {children}
    </ComparatorContext.Provider>
  );
}

export function useComparator() {
  const context = useContext(ComparatorContext);
  if (!context) {
    throw new Error('useComparator must be used within ComparatorProvider');
  }
  return context;
}