// src/contexts/NotificationContext.jsx
import { createContext, useContext, useState } from 'react';

// Creiamo il Context per le notifiche
const NotificationContext = createContext();

// Componente Provider che fornirà le funzionalità alle componenti figlie
export function NotificationProvider({ children }) {
  // State per memorizzare l'array delle notifiche attive
  const [notifications, setNotifications] = useState([]);

  // Funzione principale per aggiungere una notifica
  const addNotification = (message, type = 'added', category = 'general') => {
    // Creiamo un ID univoco basato sul timestamp
    const id = Date.now();
    // Creiamo l'oggetto notifica con tutte le proprietà
    const notification = { id, message, type, category };
    
    // Aggiungiamo la nuova notifica all'array esistente usando spread operator
    setNotifications(prev => [...prev, notification]);
    
    // Impostiamo un timer per rimuovere automaticamente la notifica dopo 4 secondi
    setTimeout(() => {
      removeNotification(id);
    }, 4000);
  };

  // Funzioni helper specifiche per semplificare l'uso nelle componenti
  // Aggiunge notifica per favoriti aggiunti
  const addToFavorites = (message) => {
    addNotification(message, 'added', 'favorites');
  };

  // Aggiunge notifica per favoriti rimossi
  const removeFromFavorites = (message) => {
    addNotification(message, 'removed', 'favorites');
  };

  // Aggiunge notifica per elementi aggiunti al comparatore
  const addToComparator = (message) => {
    addNotification(message, 'added', 'comparator');
  };

  // Aggiunge notifica per elementi rimossi dal comparatore
  const removeFromComparator = (message) => {
    addNotification(message, 'removed', 'comparator');
  };

  // Funzione per rimuovere una specifica notifica tramite ID
  const removeNotification = (id) => {
    // Filtriamo l'array mantenendo solo le notifiche con ID diverso
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Ritorniamo il Provider con il value che contiene tutto il necessario per le componenti figlie
  return (
    <NotificationContext.Provider value={{ 
      // STATE: Array delle notifiche attualmente visibili
      notifications, 
      
      // FUNZIONI PRINCIPALI: Per gestire le notifiche in modo generico
      addNotification,    // Aggiunge qualsiasi tipo di notifica
      removeNotification, // Rimuove una notifica specifica per ID
      
      // HELPER FAVORITI: Funzioni pre-configurate per notifiche dei favoriti
      addToFavorites,     // Notifica "aggiunto ai favoriti"
      removeFromFavorites, // Notifica "rimosso dai favoriti"
      
      // HELPER COMPARATORE: Funzioni pre-configurate per notifiche del comparatore
      addToComparator,    // Notifica "aggiunto al comparatore"
      removeFromComparator // Notifica "rimosso dal comparatore"
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Hook personalizzato per utilizzare il Context nelle componenti
export const useNotification = () => {
  // Otteniamo il context value
  const context = useContext(NotificationContext);
  
  // Controlliamo che l'hook sia utilizzato all'interno del Provider
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};