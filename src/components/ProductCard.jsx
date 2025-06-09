// src/components/ProductCard.jsx
import { useFavorites } from "../contexts/FavoritesContext";
import { useComparison } from "../contexts/ComparisonContext";
import { Link } from "react-router-dom";

export default function ProductCard({ car }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { 
    addToComparison, 
    removeFromComparison, 
    isInComparison, 
    isComparisonFull 
  } = useComparison();
  
  const isCarFavorite = isFavorite(car.id);
  const isCarInComparison = isInComparison(car.id);

  const handleFavoriteClick = () => {
    if (isCarFavorite) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car);
    }
  };

  const handleComparisonClick = () => {
    if (isCarInComparison) {
      removeFromComparison(car.id);
    } else {
      addToComparison(car);
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
    <div className="relative w-full max-w-md mx-auto rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Pulsanti azione in alto a destra */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {/* Pulsante comparatore */}
        <button
          onClick={handleComparisonClick}
          disabled={!isCarInComparison && isComparisonFull}
          aria-label={
            isCarInComparison 
              ? "Rimuovi dal comparatore" 
              : "Aggiungi al comparatore"
          }
          className={`text-lg cursor-pointer focus:outline-none transform transition-all duration-200 
            ${
              isCarInComparison
                ? "text-blue-500 hover:text-blue-600 scale-110"
                : isComparisonFull
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-400 hover:text-blue-400"
            } 
            hover:scale-110 disabled:hover:scale-100`}
          title={
            isCarInComparison 
              ? "Rimuovi dal comparatore"
              : isComparisonFull
              ? "Comparatore pieno (max 2 auto)"
              : "Aggiungi al comparatore"
          }
        >
          <i className={
            isCarInComparison 
              ? "fas fa-balance-scale" 
              : "far fa-balance-scale"
          }></i>
        </button>

        {/* Pulsante cuore per i preferiti */}
        <button
          onClick={handleFavoriteClick}
          aria-label={
            isCarFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
          className={`text-xl cursor-pointer focus:outline-none transform transition-transform duration-200 
            ${
              isCarFavorite
                ? "text-orange-500 hover:text-orange-600"
                : "text-gray-400 hover:text-orange-400"
            } 
            hover:scale-110`}
        >
          <i className={isCarFavorite ? "fas fa-heart" : "far fa-heart"}></i>
        </button>
      </div>

      {/* Tutto il contenuto cliccabile */}
      <Link to={`/detail/${car.id}`}>
        <div>
          <h2 className="mt-2 text-center text-xl font-bold text-gray-800 truncate">
            {car.title}
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="h-1 w-10 bg-orange-300 rounded-full"></div>
          </div>

          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
              <i
                className={`${getCategoryIcon(car.category)} text-orange-400`}
              ></i>
              {car.category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}