import { useState, useEffect, useRef } from "react";

export default function SortFilter({ onSortChange, selectedSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Opzioni di ordinamento disponibili (solo per title)
  const sortOptions = [
    { value: "", label: "Ordinamento predefinito", icon: "fas fa-sort" },
    { value: "title-asc", label: "Titolo A-Z", icon: "fas fa-sort-alpha-down" },
    { value: "title-desc", label: "Titolo Z-A", icon: "fas fa-sort-alpha-up" }
  ];

  // Chiudi il dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Trova l'opzione attualmente selezionata
  const currentOption = sortOptions.find(option => option.value === selectedSort) || sortOptions[0];

  const handleSortSelect = (sortValue) => {
    onSortChange(sortValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Dropdown Container */}
      <div className="relative" ref={dropdownRef}>
        {/* Pulsante Dropdown */}
        <button
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-gray-300 rounded-full font-medium text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center gap-2">
            <i className={`${currentOption.icon} text-orange-400`}></i>
            <span className="truncate text-sm">{currentOption.label}</span>
          </div>

          {/* Controlli a destra */}
          <div className="flex items-center gap-2 ml-2">
            {/* Pulsante reset (visibile solo se c'è un ordinamento attivo) */}
            {selectedSort && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSortSelect("");
                }}
                className="text-gray-400 hover:text-orange-500 transition-colors p-1"
                aria-label="Rimuovi ordinamento"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            )}
            {/* Freccia dropdown */}
            <i
              className={`fas fa-chevron-down text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            ></i>
          </div>
        </button>

        {/* Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {sortOptions.map((option, index) => (
              <div key={option.value}>
                <button
                  onClick={() => handleSortSelect(option.value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-150 ${
                    selectedSort === option.value
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700"
                  }`}
                >
                  <i className={`${option.icon} text-orange-400 w-4`}></i>
                  <span className="truncate text-sm">{option.label}</span>
                  {selectedSort === option.value && (
                    <i className="fas fa-check text-orange-500 ml-auto"></i>
                  )}
                </button>
                
                {/* Divider dopo la prima opzione */}
                {index === 0 && (
                  <div className="border-t border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}