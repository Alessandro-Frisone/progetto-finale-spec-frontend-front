// src/contexts/ComparatorContext.jsx
import { createContext, useContext, useState } from "react";
import { fetchCarById } from "../services/api";

/**
 * Context per la gestione del comparatore di automobili
 * 
 * Questo context fornisce:
 * - Stato globale per le auto selezionate nel comparatore (max 2)
 * - Funzioni per aggiungere/rimuovere auto dal comparatore
 * - Controlli per verificare lo stato del comparatore
 * - Recupero automatico dei dati completi delle auto quando necessario
 * - Validazione per evitare duplicati e superamento del limite
 */
// Creazione del context React per il comparatore
const ComparatorContext = createContext();

/**
 * Provider del ComparatorContext
 * 
 * Fornisce tutte le funzionalità del comparatore ai componenti figli
 * Gestisce lo stato locale e le operazioni CRUD sulle auto selezionate
 */
export function ComparatorProvider({ children }) {
  // ====================================================================
  // STATE MANAGEMENT
  // ====================================================================
  
  // Array delle auto selezionate per il confronto (massimo 2 elementi)
  const [selectedCars, setSelectedCars] = useState([]);

  /**
   * Aggiunge un'auto al comparatore con validazioni e recupero dati completi
   * 
   * Validazioni applicate:
   * - Limite massimo di 2 auto
   * - Controllo duplicati basato sull'ID
   * - Recupero automatico dei dati completi se mancanti
   */
  const addToComparator = async (car) => {
    // Validazione: controlla limite massimo e duplicati
    if (selectedCars.length < 2 && !selectedCars.find((c) => c.id === car.id)) {
      // Inizializza con i dati dell'auto ricevuta
      let fullCar = car;

      // Controllo se l'auto ha dati completi (brand e year come indicatori)
      if (!car.brand || !car.year) {
        console.log("Recupero dati completi per auto ID:", car.id);
        
        try {
          // Chiamata API per recuperare i dati completi dell'auto
          const fullCarData = await fetchCarById(car.id);
          
          if (fullCarData) {
            fullCar = fullCarData;
            console.log("Dati completi recuperati:", fullCar);
          } else {
            console.warn(
              "Impossibile recuperare dati completi per auto ID:",
              car.id
            );
          }
        } catch (error) {
          console.error("Errore nel recupero dati auto:", error);
          // In caso di errore, procede con i dati parziali disponibili
        }
      }

      // Aggiunge l'auto (con dati completi o parziali) al comparatore
      setSelectedCars((prev) => [...prev, fullCar]);
    }
  };

  /**
   * Rimuove un'auto dal comparatore basandosi sull'ID
   */
  const removeFromComparator = (carId) => {
    setSelectedCars((prev) => prev.filter((car) => car.id !== carId));
  };

  /**
   * Verifica se un'auto è già presente nel comparatore
   */
  const isInComparator = (carId) => {
    return selectedCars.some((car) => car.id === carId);
  };

  /**
   * Svuota completamente il comparatore
   * Rimuove tutte le auto selezionate
   */
  const clearComparator = () => {
    setSelectedCars([]);
  };

  // ====================================================================
  // COMPUTED VALUES
  // ====================================================================
  
  // Indica se è possibile aggiungere altre auto (limite: 2)
  const canAddMore = selectedCars.length < 2;

  // ====================================================================
  // PROVIDER RENDER
  // ====================================================================
  
  return (
    <ComparatorContext.Provider
      value={{
        // Stato corrente
        selectedCars,        // Array delle auto selezionate
        
        // Funzioni di gestione
        addToComparator,     // Aggiunge auto con validazioni
        removeFromComparator, // Rimuove auto specifica
        isInComparator,      // Verifica presenza auto
        clearComparator,     // Svuota comparatore
        
        // Utilities
        canAddMore,          // Indica se si possono aggiungere altre auto
      }}
    >
      {children}
    </ComparatorContext.Provider>
  );
}

// ====================================================================
// CUSTOM HOOK
// ====================================================================

/**
 * Hook personalizzato per utilizzare il ComparatorContext
 * 
 * Fornisce accesso alle funzionalità del comparatore con validazione
 * Lancia un errore se utilizzato al di fuori del ComparatorProvider
 * 
 * @returns {Object} - Oggetto con tutte le funzionalità del comparatore
 * @throws {Error} - Se utilizzato fuori dal provider
 */
export function useComparator() {
  const context = useContext(ComparatorContext);
  
  // Validazione: assicura che l'hook sia utilizzato all'interno del provider
  if (!context) {
    throw new Error("useComparator must be used within ComparatorProvider");
  }
  
  return context;
}