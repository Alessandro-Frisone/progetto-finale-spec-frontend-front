// src/components/NotificationContainer.jsx
import { useNotification } from '../contexts/NotificationContext';

/*
 * Caratteristiche principali:
 * - Notifiche posizionate in basso a destra dello schermo
 * - Styling dinamico basato su categoria (favorites/comparator) e tipo (added/removed)
 * - Supporto per retrocompatibilità con tipi legacy (success/error)
 * - Animazioni di entrata e transizioni fluide
 * - Pulsante di chiusura manuale per ogni notifica
 * - Design responsive con gradienti e icone contestuali
 */
export default function NotificationContainer() {
  // ====================================================================
  // CONTEXT AND STATE
  // ====================================================================
  
  // Estrae le notifiche e la funzione di rimozione dal context
  const { notifications, removeNotification } = useNotification();

  // ====================================================================
  // EARLY RETURN - CONDITIONAL RENDERING
  // ====================================================================
  
  // Se non ci sono notifiche da mostrare, non renderizza nulla
  if (notifications.length === 0) return null;

  // ====================================================================
  // UTILITY FUNCTIONS - STYLING
  // ====================================================================
  
  /**
   * Genera le classi CSS per lo stile della notifica
   * Determina colori e gradienti basati su categoria e tipo di azione
   */
  const getNotificationStyle = (notification) => {
    // Stili base comuni a tutte le notifiche
    const baseStyle = "w-96 p-6 rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out animate-slide-in-right";
    
    // Determina se è un'azione di aggiunta (supporta sia nuovi che vecchi tipi)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction
          ? `${baseStyle} bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500`  // Verde per aggiunta
          : `${baseStyle} bg-gradient-to-r from-rose-50 to-red-50 border-l-4 border-rose-500`;         // Rosso per rimozione
      
      case 'comparator':
        return isAddAction
          ? `${baseStyle} bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500`        // Blu per aggiunta
          : `${baseStyle} bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500`;  // Arancione per rimozione
      
      default:
        // Stile fallback per categorie non riconosciute
        return `${baseStyle} bg-white border-l-4 border-gray-400`;
    }
  };

  /*
   * Determina l'icona e il colore appropriati per la notifica
   */
  const getIconAndColor = (notification) => {
    // Determina se è un'azione di aggiunta (supporta sia nuovi che vecchi tipi)
    const isAddAction = notification.type === 'added' || notification.type === 'success';
    
    switch (notification.category) {
      case 'favorites':
        return isAddAction
          ? { icon: 'fas fa-heart', color: 'text-emerald-600' }          // Cuore pieno per aggiunta
          : { icon: 'fas fa-heart-broken', color: 'text-rose-600' };     // Cuore spezzato per rimozione
      
      case 'comparator':
        return isAddAction
          ? { icon: 'fas fa-plus-circle', color: 'text-blue-600' }       // Plus per aggiunta
          : { icon: 'fas fa-minus-circle', color: 'text-orange-600' };   // Minus per rimozione
      
      default:
        // Icona generica per categorie non riconosciute
        return { icon: 'fas fa-info-circle', color: 'text-gray-500' };
    }
  };

  /**
   * Determina il colore del testo basato su categoria e tipo
   */
  const getTextColor = (notification) => {
    // Determina se è un'azione di aggiunta 
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

  /**
   * Genera il titolo appropriato per la notifica
   * Include emoji per rendere più accattivante l'interfaccia
   */
  const getTitle = (notification) => {
    // Determina se è un'azione di aggiunta 
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

  // ====================================================================
  // RENDER
  // ====================================================================
  
  return (
    // Container principale - Posizionato fisso in basso a destra
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      
      {/* Mappatura di tutte le notifiche attive */}
      {notifications.map(notification => {
        // Estrae icona e colore per la notifica corrente
        const { icon, color } = getIconAndColor(notification);
        
        return (
          <div
            key={notification.id}
            className={getNotificationStyle(notification)}
          >
            {/* Layout principale della notifica */}
            <div className="flex items-start justify-between">
              
              {/* ================================================ */}
              {/* SEZIONE SINISTRA - CONTENUTO NOTIFICA */}
              {/* ================================================ */}
              <div className="flex items-start gap-4">
                
                {/* Icona della notifica */}
                <div className={`${color} text-2xl mt-1`}>
                  <i className={icon}></i>
                </div>
                
                {/* Contenuto testuale */}
                <div className="flex-1">
                  {/* Titolo della notifica */}
                  <h4 className={`font-bold text-lg mb-1 ${getTextColor(notification)}`}>
                    {getTitle(notification)}
                  </h4>
                  
                  {/* Messaggio della notifica */}
                  <p className={`text-base leading-relaxed ${getTextColor(notification)}`}>
                    {notification.message}
                  </p>
                </div>
              </div>
              
              {/* ================================================ */}
              {/* SEZIONE DESTRA - PULSANTE CHIUSURA */}
              {/* ================================================ */}
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
                aria-label="Chiudi notifica" // Accessibilità
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