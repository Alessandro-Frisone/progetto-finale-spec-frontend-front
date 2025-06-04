import { useFavorites } from "../contexts/FavoritesContext";

export default function ProductCard({ car }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isCarFavorite = isFavorite(car.id);

  const handleFavoriteClick = () => {
    if (isCarFavorite) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Bottone cuore in alto a destra */}
      <div className="absolute top-4 right-4">
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

      {/* Titolo */}
      <h2 className="mt-2 text-center text-xl font-bold text-gray-800 truncate">
        {car.title}
      </h2>

      {/* Categoria */}
      <div className="mt-3 text-center">
        <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
          {car.category}
        </span>
      </div>
    </div>
  );
}
