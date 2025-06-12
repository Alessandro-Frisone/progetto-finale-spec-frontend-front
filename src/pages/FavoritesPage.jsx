import { useFavorites } from "../contexts/FavoritesContext";
import ProductCard from "../components/home/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FavoritesPage() {
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform transition-all">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-2xl text-red-500"></i>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Elimina tutti i preferiti
            </h3>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Sei sicuro di voler rimuovere tutte le{" "}
              <span className="font-bold text-orange-600">
                {favorites.length} auto
              </span>{" "}
              dai tuoi preferiti? Questa azione non può essere annullata.
            </p>

            <div className="flex gap-3">
              <button
                onClick={cancelClearAll}
                className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold transition-all duration-200"
              >
                Annulla
              </button>
              <button
                onClick={confirmClearAll}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Elimina tutto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sfondo con gradiente */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
        
        {/* Hero Section */}
        <div className="pt-[70px] pb-8 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <i className="fas fa-heart text-white text-lg"></i>
                <span className="text-white font-semibold">Le tue auto preferite</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                I Miei Preferiti
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-white/90 text-xl">
                <span className="font-light">Hai salvato</span>
                <span className="font-bold bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                  {favorites.length}
                </span>
                <span className="font-light">auto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-orange-600">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Main Content */}
        <div className="px-6 sm:px-10 lg:px-20 pb-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Actions Bar */}
            {favorites.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <i className="fas fa-filter text-orange-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Gestisci Collezione</h3>
                    <p className="text-sm text-gray-500">Organizza i tuoi veicoli preferiti</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-5 rounded-xl transition-all duration-200 hover:shadow-md"
                  >
                    <i className="fas fa-plus text-sm"></i>
                    Aggiungi Altre
                  </Link>
                  
                  <button
                    onClick={handleClearAll}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <i className="fas fa-trash-alt text-sm"></i>
                    Elimina Tutti
                  </button>
                </div>
              </div>
            )}

            {/* Empty State */}
            {favorites.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-2xl mx-auto">
                  
                  {/* Animated Icon */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                      <Link to="/" className="group">
                        <i className="fas fa-heart text-4xl text-orange-400 group-hover:text-orange-600 transition-all duration-300 group-hover:scale-110"></i>
                      </Link>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    La tua collezione è vuota
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Inizia a costruire la tua collezione di auto preferite. 
                    Esplora la nostra selezione e salva i veicoli che catturano la tua attenzione.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <i className="fas fa-search text-lg"></i>
                      Esplora Auto
                    </Link>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-sm">Oppure</span>
                      <i className="fas fa-arrow-right text-xs"></i>
                      <span className="text-sm">Clicca sul</span>
                      <i className="fas fa-heart text-orange-500 mx-1"></i>
                      <span className="text-sm">per salvare</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Grid delle auto preferite */
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {favorites.map((car) => (
                  <ProductCard key={car.id} car={car} />
                ))}
              </div>
            )}

            {/* Stats Section */}
            {favorites.length > 0 && (
              <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    La Tua Collezione
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Hai selezionato {favorites.length} auto straordinarie
                  </p>
                  
                  <div className="flex justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-orange-600 font-semibold py-3 px-6 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <i className="fas fa-plus text-sm"></i>
                      Continua a Esplorare
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

