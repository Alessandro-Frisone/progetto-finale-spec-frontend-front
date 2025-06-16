import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, totalCars, filteredCount, searchValue = "" }) {
  // ====================================================================
  // STATE MANAGEMENT
  // ====================================================================
  
  // Stato locale per il termine di ricerca digitato dall'utente
  const [searchTerm, setSearchTerm] = useState(searchValue);
  
  // Stato per tracciare se l'input è attualmente focalizzato (per styling)
  const [isFocused, setIsFocused] = useState(false);

  // ====================================================================
  // EFFECTS
  // ====================================================================
  
  // Effetto per sincronizzare il valore interno con quello passato dalle props
  // Questo permette di aggiornare la searchbar quando il valore cambia dall'esterno
  useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

  // Effetto per implementare la ricerca con debounce
  // Evita di chiamare onSearch ad ogni keystroke, aspettando 300ms di pausa
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Debounce di 300ms per evitare troppe chiamate API

    // Cleanup: cancella il timeout precedente se l'effetto viene richiamato
    return () => clearTimeout(delayedSearch);
  }, [searchTerm, onSearch]);

  // ====================================================================
  // EVENT HANDLERS
  // ====================================================================
  
  /**
   * Gestisce il cambiamento del valore nell'input di ricerca
   */
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Cancella il termine di ricerca corrente
   */
  const clearSearch = () => {
    setSearchTerm("");
  };

  /**
   * Gestisce il submit del form (quando l'utente preme Enter)
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene il refresh della pagina
    onSearch(searchTerm); // Esegue immediatamente la ricerca
  };

  return (
    <div className="mb-8">
      {/* Titolo della sezione di ricerca */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Cerca auto per nome
      </h3>
      
      {/* Form container per la ricerca */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Container principale dell'input */}
          <div className="relative">
            {/* Campo di input per la ricerca */}
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}   // Attiva lo stato di focus
              onBlur={() => setIsFocused(false)}   // Disattiva lo stato di focus
              placeholder="Cerca per nome auto (es. BMW, Audi, Mercedes...)"
              className={`w-full px-12 py-4 text-lg border-2 rounded-xl bg-white shadow-sm transition-all duration-200 focus:outline-none ${
                // Styling condizionale basato su focus e presenza di testo
                isFocused || searchTerm
                  ? "border-orange-400 shadow-lg ring-2 ring-orange-100" // Stile attivo
                  : "border-gray-300 hover:border-gray-400"              // Stile inattivo
              }`}
            />
            
            {/* Icona di ricerca (lato sinistro dell'input) */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <i className={`fas fa-search text-xl transition-colors duration-200 ${
                // Colore dell'icona basato sullo stato di focus
                isFocused || searchTerm ? "text-orange-500" : "text-gray-400"
              }`}></i>
            </div>
            
            {/* Pulsante per cancellare la ricerca (lato destro dell'input) */}
            {/* Mostrato solo quando c'è del testo nel campo di ricerca */}
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors duration-200 p-1"
                aria-label="Cancella ricerca" // Per l'accessibilità
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}