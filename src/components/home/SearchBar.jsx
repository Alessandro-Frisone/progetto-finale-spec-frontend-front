import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, totalCars, filteredCount, searchValue = "" }) {
  const [searchTerm, setSearchTerm] = useState(searchValue);
  const [isFocused, setIsFocused] = useState(false);

  // Effetto per sincronizzare con il valore esterno
  useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

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
    </div>
  );
}