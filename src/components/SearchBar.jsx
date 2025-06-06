import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, totalCars, filteredCount }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Effetto per chiamare onSearch quando cambia il termine di ricerca
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Debounce di 300ms per evitare troppe chiamate

    return () => clearTimeout(delayedSearch);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Cerca auto per nome
      </h3>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Input di ricerca */}
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Cerca per nome auto (es. BMW, Audi, Mercedes...)"
              className={`w-full px-12 py-4 text-lg border-2 rounded-xl bg-white shadow-sm transition-all duration-200 focus:outline-none ${
                isFocused || searchTerm
                  ? "border-orange-400 shadow-lg ring-2 ring-orange-100"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            />
            
            {/* Icona di ricerca */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <i className={`fas fa-search text-xl transition-colors duration-200 ${
                isFocused || searchTerm ? "text-orange-500" : "text-gray-400"
              }`}></i>
            </div>
            
            {/* Pulsante per cancellare la ricerca */}
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors duration-200 p-1"
                aria-label="Cancella ricerca"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Risultati della ricerca */}
      {searchTerm && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
            <i className="fas fa-search text-orange-500"></i>
            <span className="text-gray-700">
              {filteredCount > 0 ? (
                <>
                  Trovate <span className="font-semibold text-orange-600">{filteredCount}</span> auto 
                  su <span className="font-semibold">{totalCars}</span> per 
                  "<span className="font-semibold text-orange-600">{searchTerm}</span>"
                </>
              ) : (
                <>
                  Nessun risultato per 
                  "<span className="font-semibold text-orange-600">{searchTerm}</span>"
                </>
              )}
            </span>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="ml-2 text-orange-500 hover:text-orange-700 font-medium text-sm underline"
              >
                Cancella
              </button>
            )}
          </div>
        </div>
      )}

      {/* Suggerimenti quando non ci sono risultati */}
      {searchTerm && filteredCount === 0 && (
        <div className="text-center mt-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-md mx-auto">
            <i className="fas fa-lightbulb text-gray-400 text-2xl mb-2"></i>
            <p className="text-gray-600 text-sm">
              <strong>Suggerimenti:</strong>
            </p>
            <ul className="text-gray-500 text-sm mt-2 space-y-1">
              <li>• Controlla l'ortografia</li>
              <li>• Usa termini più generici (es. "BMW" invece di "BMW Serie 3")</li>
              <li>• Prova a cercare solo la marca o il modello</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}