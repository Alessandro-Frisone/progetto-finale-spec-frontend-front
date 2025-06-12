// src/contexts/ComparatorContext.jsx
import { createContext, useContext, useState } from 'react';

const ComparatorContext = createContext();

export function ComparatorProvider({ children }) {
  const [selectedCars, setSelectedCars] = useState([]);

  const addToComparator = (car) => {
    if (selectedCars.length < 2 && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars(prev => [...prev, car]);
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