// src/contexts/NotificationContext.jsx
import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'added', category = 'general') => {
    const id = Date.now();
    const notification = { id, message, type, category };
    
    setNotifications(prev => [...prev, notification]);
    
    // Rimuovi automaticamente dopo 4 secondi
    setTimeout(() => {
      removeNotification(id);
    }, 4000);
  };

  // Funzioni helper per semplificare l'uso
  const addToFavorites = (message) => {
    addNotification(message, 'added', 'favorites');
  };

  const removeFromFavorites = (message) => {
    addNotification(message, 'removed', 'favorites');
  };

  const addToComparator = (message) => {
    addNotification(message, 'added', 'comparator');
  };

  const removeFromComparator = (message) => {
    addNotification(message, 'removed', 'comparator');
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      addNotification, 
      removeNotification,
      addToFavorites,
      removeFromFavorites,
      addToComparator,
      removeFromComparator
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};