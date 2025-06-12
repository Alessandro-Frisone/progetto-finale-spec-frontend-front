// src/components/NotificationContainer.jsx
import { useNotification } from '../contexts/NotificationContext';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) return null;

  const getNotificationStyle = (notification) => {
    const baseStyle = "w-96 p-6 rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out animate-slide-in-right";
    
    // Gestisce sia i nuovi tipi (added/removed) che i vecchi (success/error)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction
          ? `${baseStyle} bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500`
          : `${baseStyle} bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500`;
      
      case 'comparator':
        return isAddAction
          ? `${baseStyle} bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500`
          : `${baseStyle} bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500`;
      
      default:
        return `${baseStyle} bg-white border-l-4 border-gray-400`;
    }
  };

  const getIconAndColor = (notification) => {
    // Gestisce sia i nuovi tipi (added/removed) che i vecchi (success/error)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction
          ? { icon: 'fas fa-heart', color: 'text-emerald-600' }
          : { icon: 'fas fa-heart-broken', color: 'text-rose-600' };
      
      case 'comparator':
        return isAddAction
          ? { icon: 'fas fa-plus-circle', color: 'text-blue-600' }
          : { icon: 'fas fa-minus-circle', color: 'text-orange-600' };
      
      default:
        return { icon: 'fas fa-info-circle', color: 'text-gray-500' };
    }
  };

  const getTextColor = (notification) => {
    // Gestisce sia i nuovi tipi (added/removed) che i vecchi (success/error)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction ? 'text-emerald-800' : 'text-rose-800';
      case 'comparator':
        return isAddAction ? 'text-blue-800' : 'text-orange-800';
      default:
        return 'text-gray-800';
    }
  };

  const getTitle = (notification) => {
    // Gestisce sia i nuovi tipi (added/removed) che i vecchi (success/error)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction ? '💚 Aggiunto ai Preferiti' : '💔 Rimosso dai Preferiti';
      case 'comparator':
        return isAddAction ? '⚖️ Aggiunto al Comparatore' : '📤 Rimosso dal Comparatore';
      default:
        return 'Notifica';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      {notifications.map(notification => {
        const { icon, color } = getIconAndColor(notification);
        
        return (
          <div
            key={notification.id}
            className={getNotificationStyle(notification)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`${color} text-2xl mt-1`}>
                  <i className={icon}></i>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg mb-1 ${getTextColor(notification)}`}>
                    {getTitle(notification)}
                  </h4>
                  <p className={`text-base leading-relaxed ${getTextColor(notification)}`}>
                    {notification.message}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}