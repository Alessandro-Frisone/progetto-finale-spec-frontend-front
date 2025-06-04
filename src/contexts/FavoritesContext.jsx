import { createContext, useContext, useState } from 'react';

// Creiamo il Context per i favoriti - questo ci permette di condividere i dati tra componenti
const FavoritesContext = createContext();

// Provider Component: avvolge l'app e fornisce i dati dei favoriti a tutti i componenti figli
export const FavoritesProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([]);

  // Funzione per aggiungere un'auto ai favoriti
  const addToFavorites = (car) => {
    setFavorites(prev => {
      // Controllo per evitare duplicati: se l'auto è già nei favoriti, non la aggiungiamo
      if (prev.find(fav => fav.id === car.id)) {
        return prev; 
      }
      // Usa lo spread operator per creare un nuovo array con l'auto aggiunta
      return [...prev, car];
    });
  };

  // Funzione per rimuovere un'auto dai favoriti usando l'ID
  const removeFromFavorites = (carId) => {
    // Filtriamo l'array mantenendo solo le auto con ID diverso da quello da rimuovere
    setFavorites(prev => prev.filter(car => car.id !== carId));
  };

  // Funzione helper per verificare se un'auto è già nei favoriti
  const isFavorite = (carId) => {
    // Usa .some() per verificare se almeno un elemento soddisfa la condizione
    return favorites.some(car => car.id === carId);
  };

  // Restituiamo il Provider che rende disponibili i dati e le funzioni a tutti i componenti figli
  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom Hook: semplifica l'uso del Context nei componenti
export const useFavorites = () => {
  // Otteniamo il context usando useContext
  const context = useContext(FavoritesContext);
  
  // Controllo di sicurezza: se il context è undefined, significa che stiamo usando hook fuori dal Provider
  if (!context) {
    throw new Error('useFavorites deve essere usato dentro FavoritesProvider');
  }
  
  return context; // Ritorna tutti i dati e funzioni del context
};