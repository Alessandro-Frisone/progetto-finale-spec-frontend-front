// src/components/NotificationContainer.jsx
import { useNotification } from '../contexts/NotificationContext';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) return null;

  const getNotificationStyle = (notification) => {
    const baseStyle = "w-96 p-6 rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out animate-slide-in-right";
    
    switch (notification.category) {
      case 'favorites':
        return notification.type === 'success' 
          ? `${baseStyle} bg-gradient-to-r from-pink-50 to-red-50 border-l-4 border-red-400`
          : `${baseStyle} bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400`;
      
      case 'comparator':
        return notification.type === 'success'
          ? `${baseStyle} bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400`
          : notification.type === 'error'
          ? `${baseStyle} bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500`
          : `${baseStyle} bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400`;
      
      default:
        return `${baseStyle} bg-white border-l-4 border-gray-400`;
    }
  };

  const getIconAndColor = (notification) => {
    switch (notification.category) {
      case 'favorites':
        return notification.type === 'success' 
          ? { icon: 'fas fa-heart', color: 'text-red-500' }
          : { icon: 'fas fa-heart-broken', color: 'text-orange-500' };
      
      case 'comparator':
        return notification.type === 'success'
          ? { icon: 'fas fa-balance-scale', color: 'text-blue-500' }
          : notification.type === 'error'
          ? { icon: 'fas fa-exclamation-triangle', color: 'text-red-500' }
          : { icon: 'fas fa-balance-scale', color: 'text-purple-500' };
      
      default:
        return { icon: 'fas fa-info-circle', color: 'text-gray-500' };
    }
  };

  const getTextColor = (notification) => {
    switch (notification.category) {
      case 'favorites':
        return notification.type === 'success' ? 'text-red-800' : 'text-orange-800';
      case 'comparator':
        return notification.type === 'success' 
          ? 'text-blue-800' 
          : notification.type === 'error' 
          ? 'text-red-800' 
          : 'text-purple-800';
      default:
        return 'text-gray-800';
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
                    {notification.category === 'favorites' ? '❤️ Preferiti' : '⚖️ Comparatore'}
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