// src/components/ComparatorBar.jsx
import { useComparator } from "../contexts/ComparatorContext";
import { Link } from "react-router-dom";

/**
 * Componente ComparatorBar - Barra fissa per la gestione del comparatore di auto
 * 
 * Questo componente visualizza una barra in fondo alla pagina che mostra:
 * - Le auto attualmente selezionate per il confronto (max 2)
 * - Pulsanti per rimuovere singole auto dal comparatore
 * - Pulsante per confrontare quando sono selezionate 2 auto
 * - Pulsante per svuotare completamente il comparatore
 * 
 * La barra è visibile solo quando c'è almeno un'auto selezionata
 */
export default function ComparatorBar() {
  // ====================================================================
  // CONTEXT AND STATE
  // ====================================================================
  
  // Estrae le funzioni e lo stato dal ComparatorContext
  const { selectedCars, removeFromComparator, clearComparator } =
    useComparator();

  // ====================================================================
  // EARLY RETURN - CONDITIONAL RENDERING
  // ====================================================================
  
  // Se non ci sono auto selezionate, non renderizza nulla
  // Questo nasconde completamente la barra quando non è necessaria
  if (selectedCars.length === 0) return null;

  return (
    // Container principale - Barra fissa in fondo alla pagina
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl z-40 border-t-4 border-blue-500">
      
      {/* Container responsive con padding */}
      <div className="container mx-auto px-4 py-4">
        
        {/* Layout principale - Due sezioni: info auto e pulsanti azione */}
        <div className="flex items-center justify-between">
          
          {/* ============================================================ */}
          {/* SEZIONE SINISTRA - VISUALIZZAZIONE AUTO SELEZIONATE */}
          {/* ============================================================ */}
          <div className="flex items-center space-x-6">
            
            {/* Header con icona e contatore */}
            <div className="flex items-center gap-2">
              <i className="fas fa-balance-scale text-xl text-blue-200"></i>
              <span className="font-semibold text-lg">
                Comparatore ({selectedCars.length}/2)
              </span>
            </div>

            {/* Container per le auto selezionate */}
            <div className="flex space-x-4">
              
              {/* Mappatura delle auto selezionate */}
              {selectedCars.map((car, index) => (
                <div
                  key={car.id}
                  className="flex items-center bg-blue-500/30 rounded-lg px-4 py-2 border border-blue-400/30"
                >
                  {/* Nome dell'auto con troncamento del testo se troppo lungo */}
                  <span className="font-medium text-sm mr-3 max-w-32 truncate">
                    {car.title}
                  </span>
                  
                  {/* Pulsante per rimuovere l'auto specifica dal comparatore */}
                  <button
                    onClick={() => removeFromComparator(car.id)}
                    className="text-blue-200 hover:text-white hover:bg-blue-500 p-1 rounded-full transition-all duration-200"
                    aria-label={`Rimuovi ${car.title} dal comparatore`} // Accessibilità
                  >
                    <i className="fas fa-times text-sm"></i>
                  </button>
                </div>
              ))}

              {/* Placeholder per la seconda auto quando ne è selezionata solo una */}
              {selectedCars.length === 1 && (
                <div className="flex items-center bg-blue-500/20 rounded-lg px-4 py-2 border-2 border-dashed border-blue-400/50">
                  <span className="text-blue-200 text-sm font-medium">
                    Seleziona seconda auto
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* SEZIONE DESTRA - PULSANTI DI AZIONE */}
          {/* ============================================================ */}
          <div className="flex items-center space-x-3">
            
            {/* Pulsante "Confronta" - Visibile solo quando sono selezionate 2 auto */}
            {selectedCars.length === 2 && (
              <Link
                to="/comparator" // Naviga alla pagina di confronto
                className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <i className="fas fa-eye text-blue-600"></i>
                Confronta
              </Link>
            )}

            {/* Pulsante "Svuota" - Rimuove tutte le auto dal comparatore */}
            <button
              onClick={clearComparator}
              className="bg-blue-500/30 text-white px-4 py-2 rounded-full hover:bg-blue-500/50 transition-all duration-200 border border-blue-400/30 flex items-center gap-2"
            >
              <i className="fas fa-trash text-sm"></i>
              Svuota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}