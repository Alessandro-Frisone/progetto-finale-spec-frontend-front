// src/components/home/ProductCard.jsx (aggiornato)
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
    } else {
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
    <div className="group relative w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-orange-200 h-96 flex flex-col">
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header section with buttons */}
      <div className="relative px-8 pt-8 pb-6 bg-gradient-to-r from-orange-50 to-orange-100/50 border-b border-orange-100 flex-shrink-0">
        {/* Favorite button */}
        <button
          onClick={handleFavoriteClick}
          aria-label={
            isCarFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
          className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isCarFavorite
              ? "text-orange-600 bg-orange-50 hover:bg-orange-100 shadow-lg"
              : "text-orange-400 hover:text-orange-600 hover:bg-orange-50 shadow-md"
          }`}
        >
          <i
            className={`${
              isCarFavorite ? "fas fa-heart" : "far fa-heart"
            } text-xl`}
          ></i>
        </button>

        {/* Comparator checkbox */}
        <button
          onClick={handleComparatorClick}
          disabled={!canAddMore && !isCarInComparator}
          aria-label={
            isCarInComparator
              ? "Rimuovi dal comparatore"
              : "Aggiungi al comparatore"
          }
          className={`absolute top-6 right-20 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isCarInComparator
              ? "text-blue-600 bg-blue-50 hover:bg-blue-100 shadow-lg"
              : canAddMore
              ? "text-blue-400 hover:text-blue-600 hover:bg-blue-50 shadow-md"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          <i
            className={`${
              isCarInComparator ? "fas fa-check-square" : "far fa-square"
            } text-xl`}
          ></i>
        </button>

        <Link to={`/detail/${car.id}`} className="block">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight pr-28 hover:text-orange-700 transition-colors duration-300 group-hover:text-orange-800">
            {car.title}
          </h2>
        </Link>
      </div>

      {/* Content section */}
      <div className="px-8 py-8 flex-1 flex flex-col justify-between">
        {/* Category badge - centrata */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-orange-600 hover:to-orange-700 group-hover:scale-105">
            <i
              className={`${getCategoryIcon(
                car.category
              )} text-orange-100 text-base`}
            ></i>
            <span className="font-semibold text-sm uppercase tracking-wider">
              {car.category}
            </span>
          </div>
        </div>

        {/* Decorative section */}
        <div className="space-y-4">
          {/* Orange accent bars */}
          <div className="flex items-center gap-3">
            <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex-1"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full shadow-md"></div>
            <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex-1"></div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 rounded-lg border border-orange-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-200 transition-all duration-300 group-hover:shadow-md">
              <Link to={`/detail/${car.id}`} className="block relative z-10">
                <span className="text-sm font-medium uppercase tracking-widest">
                  Visualizza Dettagli
                </span>
                <i className="fas fa-arrow-right text-orange-600 text-xs ml-1 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom orange accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
    </div>
  );
}
