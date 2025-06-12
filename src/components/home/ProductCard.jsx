// src/components/home/ProductCard.jsx (completamente ridisegnato)
import { useFavorites } from "../../contexts/FavoritesContext";
import { useComparator } from "../../contexts/ComparatorContext";
import { Link } from "react-router-dom";

export default function ProductCard({ car }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToComparator, removeFromComparator, isInComparator, canAddMore } =
    useComparator();

  const isCarFavorite = isFavorite(car.id);
  const isCarInComparator = isInComparator(car.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCarFavorite) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car);
    }
  };

  const handleComparatorClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCarInComparator) {
      removeFromComparator(car.id);
    } else if (canAddMore) {
      addToComparator(car);
    }
  };

  // Logica per scegliere l'icona in base alla categoria
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

  return (
    <div className="group relative w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Header con gradient nero sfumato */}
      <div className="relative h-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        {/* Pulsante favoriti */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 ${
            isCarFavorite
              ? "text-orange-500"
              : "text-white hover:text-orange-300"
          }`}
          aria-label={
            isCarFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
        >
          <i
            className={`${
              isCarFavorite ? "fas fa-heart" : "far fa-heart"
            } text-lg`}
          ></i>
        </button>

        {/* Titolo centrato nell'header */}
        <div className="absolute inset-0 flex items-center justify-center px-16">
          <h2 className="text-xl font-bold text-white text-center leading-tight hover:text-gray-200 transition-colors duration-300">
            {car.title}
          </h2>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="p-6 space-y-6">
        {/* Badge categoria centrato */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
            <i
              className={`${getCategoryIcon(car.category)} text-orange-600`}
            ></i>
            <span className="text-sm font-medium">{car.category}</span>
          </div>
        </div>

        {/* Separatore decorativo */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-300"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-300"></div>
        </div>

        {/* Azioni */}
        <div className="space-y-3">
          {/* Pulsante comparatore */}
          <button
            onClick={handleComparatorClick}
            disabled={!canAddMore && !isCarInComparator}
            className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              isCarInComparator
                ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                : canAddMore
                ? "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                : "bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed opacity-60"
            }`}
          >
            <i
              className={`fas fa-balance-scale ${
                isCarInComparator ? "text-orange-400" : "text-gray-500"
              }`}
            ></i>
            <span className="text-sm">
              {isCarInComparator ? "Nel comparatore" : "Aggiungi al confronto"}
            </span>
          </button>

          {/* Pulsante dettagli */}
          <Link
            to={`/detail/${car.id}`}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg group"
          >
            <span className="text-sm">Visualizza dettagli</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>

      {/* Accent line in basso */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
    </div>
  );
}