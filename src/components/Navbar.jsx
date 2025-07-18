// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useComparator } from "../contexts/ComparatorContext";

/**
 * Componente Navbar - Barra di navigazione principale dell'applicazione
 * 
 * Caratteristiche principali:
 * - Barra fissa in alto con effetto glassmorphism
 * - Logo cliccabile che riporta alla home
 * - Menu di navigazione con evidenziazione della pagina attiva
 * - Badge dinamico sul comparatore che mostra il numero di auto selezionate
 * - Design responsive e animazioni fluide
 */

export default function Navbar() {
 // ====================================================================
  // HOOKS E CONTEXT
  // ====================================================================
  
  // Ottiene le auto selezionate dal context del comparatore
  const { selectedCars } = useComparator();
  
  // Hook per ottenere informazioni sulla route corrente
  const location = useLocation();

  // ====================================================================
  // UTILITY FUNCTIONS
  // ====================================================================
  
  /**
   * Determina se il path specificato corrisponde alla route attiva
   * Utilizzato per applicare lo styling alla voce di menu attiva
   */
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 shadow-md px-12 py-5 flex justify-between items-center fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-gray-800">
      {/* Logo + Brand */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo_transparent.png"
            alt="AutoDeal logo"
            className="h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex items-center space-x-10 text-lg font-semibold">
        <Link
          to="/"
          className={`transition-colors duration-200 ${
            isActive("/")
              ? "text-white border-b-2 border-orange-500 pb-1"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={`transition-colors duration-200 ${
            isActive("/favorites")
              ? "text-white border-b-2 border-orange-500 pb-1"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Preferiti
        </Link>
        <Link
          to="/comparator"
          className={`relative transition-colors duration-200 ${
            isActive("/comparator")
              ? "text-white border-b-2 border-orange-500 pb-1"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Comparatore
          {selectedCars.length > 0 && (
            <span className="absolute -top-2 -right-5 bg-orange-500 text-white text-[11px] font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md animate-pulse">
              {selectedCars.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
