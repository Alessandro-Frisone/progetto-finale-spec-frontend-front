import { useFavorites } from "../contexts/FavoritesContext";
import ProductCard from "../components/home/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FavoritesPage() {
  // Otteniamo l'array dei favoriti e la funzione per cancellarli dal context
  const { favorites, clearAllFavorites } = useFavorites();
  const [showModal, setShowModal] = useState(false);

  const handleClearAll = () => {
    setShowModal(true);
  };

  const confirmClearAll = () => {
    clearAllFavorites();
    setShowModal(false);
  };

  const cancelClearAll = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Modal di conferma */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-2xl">
            {/* Icona di avviso */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            {/* Titolo e messaggio */}
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Elimina tutti i preferiti
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Sei sicuro di voler rimuovere tutte le{" "}
              <span className="font-semibold text-orange-600">
                {favorites.length} auto
              </span>{" "}
              dai tuoi preferiti? Questa azione non può essere annullata.
            </p>

            {/* Pulsanti */}
            <div className="flex gap-3">
              <button
                onClick={cancelClearAll}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors duration-200"
              >
                Annulla
              </button>
              <button
                onClick={confirmClearAll}
                className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Elimina tutto
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 min-h-screen pt-[120px] px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
        {/* Header con titolo e pulsante clear */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            I Miei Preferiti{" "}
            <span className="text-orange-500">({favorites.length})</span>
          </h1>
          
          {/* Pulsante per eliminare tutti i preferiti - visibile solo se ci sono favoriti */}
          {favorites.length > 0 && (
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 self-start sm:self-auto"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Elimina Tutti
            </button>
          )}
        </div>

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
    </>
  );
}