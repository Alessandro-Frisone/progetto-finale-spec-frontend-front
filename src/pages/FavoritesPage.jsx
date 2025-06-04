import { useFavorites } from "../contexts/FavoritesContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  // Otteniamo l'array dei favoriti dal context
  const { favorites } = useFavorites();

  return (
    <div className="bg-gray-50 min-h-screen pt-[120px] px-6 sm:px-10 lg:px-20 pb-20">
  <div className="max-w-7xl mx-auto">
    {/* Titolo */}
    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      I Miei Preferiti{" "}
      <span className="text-orange-500">({favorites.length})</span>
    </h1>

    {/* Se non ci sono favoriti */}
    {favorites.length === 0 ? (
      <div className="flex flex-col items-center justify-center text-center py-35">
        {/* SVG cliccabile */}
        <Link to="/" className="mb-6 group">
          <svg
            className="h-24 w-24 text-gray-300 group-hover:text-orange-400 transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </Link>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Nessuna auto nei preferiti
        </h3>

        <p className="text-gray-500 max-w-md mb-6">
          Inizia ad aggiungere le auto che ti piacciono cliccando sul{" "}
          <span className="text-orange-500 font-semibold">cuore</span> nella lista.
        </p>

        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
        >
          Torna alla Home
        </Link>
      </div>
    ) : (
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {favorites.map((car) => (
          <ProductCard key={car.id} car={car} />
        ))}
      </div>
    )}
  </div>
</div>
  );
}
