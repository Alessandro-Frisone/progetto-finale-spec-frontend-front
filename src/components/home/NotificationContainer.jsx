import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    const id = Date.now();
    const newNotification = {
      id,
      ...notification,
      timestamp: new Date(),
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-rimuovi la notifica dopo un certo tempo (default 4 secondi)
    setTimeout(() => {
      removeNotification(id);
    }, notification.duration || 4000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const showSuccess = (message, options = {}) => {
    addNotification({
      type: 'success',
      message,
      ...options,
    });
  };

  const showError = (message, options = {}) => {
    addNotification({
      type: 'error',
      message,
      ...options,
    });
  };

  const showInfo = (message, options = {}) => {
    addNotification({
      type: 'info',
      message,
      ...options,
    });
  };

  const showWarning = (message, options = {}) => {
    addNotification({
      type: 'warning',
      message,
      ...options,
    });
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification,
      showSuccess,
      showError,
      showInfo,
      showWarning,
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications deve essere usato dentro NotificationProvider');
  }
  return context;
};