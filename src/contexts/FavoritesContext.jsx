import { createContext, useContext, useState } from 'react';
import { useNotification } from './NotificationContext';

// Creiamo il Context per i favoriti - questo ci permette di condividere i dati tra componenti
const FavoritesContext = createContext();

// Provider Component: avvolge l'app e fornisce i dati dei favoriti a tutti i componenti figli
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { addNotification } = useNotification();

  // Funzione per aggiungere un'auto ai favoriti
  const addToFavorites = (car) => {
    setFavorites(prev => {
      // Controllo per evitare duplicati: se l'auto è già nei favoriti, non la aggiungiamo
      if (prev.find(fav => fav.id === car.id)) {
        return prev; 
      }
      
      // Aggiungi notifica di successo
      addNotification(`${car.title} aggiunta ai preferiti! ❤️`, 'success');
      
      // Usa lo spread operator per creare un nuovo array con l'auto aggiunta
      return [...prev, car];
    });
  };

  // Funzione per rimuovere un'auto dai favoriti usando l'ID
  const removeFromFavorites = (carId) => {
    // Trova l'auto da rimuovere per mostrare il nome nella notifica
    const carToRemove = favorites.find(car => car.id === carId);
    
    // Filtriamo l'array mantenendo solo le auto con ID diverso da quello da rimuovere
    setFavorites(prev => prev.filter(car => car.id !== carId));
    
    // Aggiungi notifica di rimozione
    if (carToRemove) {
      addNotification(`${carToRemove.title} rimossa dai preferiti`, 'info');
    }
  };

  // Funzione per eliminare tutti i favoriti
  const clearAllFavorites = () => {
    const count = favorites.length;
    setFavorites([]);
    
    // Notifica per la cancellazione di tutti i preferiti
    if (count > 0) {
      addNotification(`Rimoss${count === 1 ? 'a' : 'e'} ${count} auto dai preferiti`, 'warning');
    }
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
      clearAllFavorites,
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