// src/contexts/ComparisonContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ComparisonContext = createContext();

export function ComparisonProvider({ children }) {
  // Stato per le auto nel comparatore (massimo 2)
  const [comparisonCars, setComparisonCars] = useState([]);

  // Carica i dati dal localStorage al mount
  useEffect(() => {
    const saved = localStorage.getItem("comparison-cars");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setComparisonCars(parsed.slice(0, 2)); // Assicura max 2 auto
        }
      } catch (error) {
        console.error("Errore nel caricamento del comparatore:", error);
      }
    }
  }, []);

  // Salva nel localStorage ogni volta che cambia lo stato
  useEffect(() => {
    localStorage.setItem("comparison-cars", JSON.stringify(comparisonCars));
  }, [comparisonCars]);

  // Aggiunge un'auto al comparatore
  const addToComparison = (car) => {
    setComparisonCars((prev) => {
      // Se l'auto è già nel comparatore, non fare nulla
      if (prev.find((c) => c.id === car.id)) {
        return prev;
      }
      
      // Se ci sono già 2 auto, sostituisci la prima con la nuova
      if (prev.length >= 2) {
        return [prev[1], car];
      }
      
      // Altrimenti aggiungi normalmente
      return [...prev, car];
    });
  };

  // Rimuove un'auto dal comparatore
  const removeFromComparison = (carId) => {
    setComparisonCars((prev) => prev.filter((car) => car.id !== carId));
  };

  // Verifica se un'auto è nel comparatore
  const isInComparison = (carId) => {
    return comparisonCars.some((car) => car.id === carId);
  };

  // Svuota il comparatore
  const clearComparison = () => {
    setComparisonCars([]);
  };

  // Verifica se il comparatore è pieno (2 auto)
  const isComparisonFull = () => {
    return comparisonCars.length >= 2;
  };

  // Verifica se si può confrontare (almeno 2 auto)
  const canCompare = () => {
    return comparisonCars.length === 2;
  };

  const value = {
    comparisonCars,
    addToComparison,
    removeFromComparison,
    isInComparison,
    clearComparison,
    isComparisonFull,
    canCompare,
    comparisonCount: comparisonCars.length
  };

  return (
    <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison deve essere usato all'interno di ComparisonProvider");
  }
  return context;
}