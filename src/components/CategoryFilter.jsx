import { useState, useEffect, useRef } from "react";

export default function CategoryFilter({
  cars,
  onFilterChange,
  selectedCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Estrai le categorie uniche dalle auto
  useEffect(() => {
    if (cars && cars.length > 0) {
      const uniqueCategories = [...new Set(cars.map((car) => car.category))];
      setCategories(uniqueCategories.sort()); // Ordina alfabeticamente
    }
  }, [cars]);

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

  // Funzione per ottenere l'icona della categoria
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "suv":
        return "fas fa-car";
      case "berlina":
        return "fas fa-car-side";
      case "coupé":
        return "fas fa-car-alt";
      case "station wagon":
        return "fas fa-shuttle-van";
      case "cabrio":
        return "fas fa-wind";
      case "plug-in hybrid":
        return "fas fa-charging-station";
      default:
        return "fas fa-car";
    }
  };

  const handleCategorySelect = (category) => {
    onFilterChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (categories.length === 0) {
    return null; // Non mostra nulla se non ci sono categorie
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      {/* Titolo */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Filtra per categoria
        </h3>
        <div className="h-1 w-16 bg-orange-300 rounded-full mx-auto"></div>
      </div>

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
            {selectedCategory ? (
              <>
                <i
                  className={`${getCategoryIcon(
                    selectedCategory
                  )} text-orange-400`}
                ></i>
                <span>{selectedCategory}</span>
              </>
            ) : (
              <>
                <i className="fas fa-list text-orange-400"></i>
                <span>Tutte le categorie</span>
              </>
            )}
          </div>

          {/* Freccia dropdown */}
          <div className="flex items-center gap-2">
            {selectedCategory && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategorySelect("");
                }}
                className="text-gray-400 hover:text-orange-500 transition-colors p-1"
                aria-label="Rimuovi filtro categoria"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            )}
            <i
              className={`fas fa-chevron-down text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            ></i>
          </div>
        </button>

        {/* Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
            {/* Opzione "Tutte le categorie" */}
            <button
              onClick={() => handleCategorySelect("")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-150 ${
                selectedCategory === ""
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-700"
              }`}
            >
              <i className="fas fa-list text-orange-400 w-4"></i>
              <span className="font-medium">Tutte le categorie</span>
              {selectedCategory === "" && (
                <i className="fas fa-check text-orange-500 ml-auto"></i>
              )}
            </button>

            {/* Divider */}
            <div className="border-t border-gray-100"></div>

            {/* Lista delle categorie */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-150 ${
                  selectedCategory === category
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-700"
                }`}
              >
                <i
                  className={`${getCategoryIcon(category)} text-orange-400 w-4`}
                ></i>
                <span>{category}</span>
                {selectedCategory === category && (
                  <i className="fas fa-check text-orange-500 ml-auto"></i>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Indicatore categoria selezionata (opzionale, per maggiore chiarezza) */}
      {selectedCategory && (
        <div className="text-center mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
            <i className={`${getCategoryIcon(selectedCategory)} mr-2`}></i>
            Filtrando per: {selectedCategory}
          </span>
        </div>
      )}
    </div>
  );
}
