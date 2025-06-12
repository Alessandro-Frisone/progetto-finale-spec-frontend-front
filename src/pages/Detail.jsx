import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCarById } from "../services/api";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Detail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    async function loadCar() {
      const data = await fetchCarById(id);
      setCar(data);
    }
    loadCar();
  }, [id]);

  const isCarFavorite = car ? isFavorite(car.id) : false;

  const handleFavoriteClick = () => {
    if (!car) return;
    if (isCarFavorite) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car);
    }
  };

  const toggleExpanded = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);

    if (!newValue) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
      return;
    }

    setTimeout(() => {
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    }, 200);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!car) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Caricamento dettagli veicolo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Sezione principale */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Header del veicolo */}
          <div className="border-b bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
                <p className="text-orange-100 text-lg">{car.brand} {car.model} • Anno {car.year}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <p className="text-orange-100 text-sm font-medium">Prezzo</p>
                  <p className="text-3xl font-bold">€ {car.price.toLocaleString("it-IT")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenuto principale */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 p-8">
            {/* Immagine principale */}
            <div className="xl:col-span-3">
              {car.imageUrl ? (
                <div className="relative">
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    className="w-full h-80 xl:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={handleFavoriteClick}
                      className={`p-3 rounded-full shadow-lg transition-all ${
                        isCarFavorite
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-white text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      <i className={`${isCarFavorite ? "fas" : "far"} fa-heart text-lg`}></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full h-80 xl:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <i className="fas fa-car text-4xl mb-4"></i>
                    <p>Immagine non disponibile</p>
                  </div>
                </div>
              )}
            </div>

            {/* Pannello informazioni rapide */}
            <div className="xl:col-span-2 space-y-6">
              {/* Caratteristiche principali */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Caratteristiche Principali</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Categoria</span>
                    <span className="font-semibold bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {car.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Chilometraggio</span>
                    <span className="font-semibold">{car.km.toLocaleString("it-IT")} km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Carburante</span>
                    <span className="font-semibold">{car.fuelType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trasmissione</span>
                    <span className="font-semibold">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Potenza</span>
                    <span className="font-semibold">{car.horsepower} HP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Posti</span>
                    <span className="font-semibold">{car.seats}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Porte</span>
                    <span className="font-semibold">{car.doors}</span>
                  </div>
                </div>
              </div>

              {/* Azioni */}
              <div className="space-y-3">
                <button className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                  <i className="fas fa-calendar-alt"></i>
                  Prenota Test Drive
                </button>
                <button className="w-full border-2 border-orange-600 text-orange-600 py-4 px-6 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                  <i className="fas fa-phone"></i>
                  Contatta il Venditore
                </button>
                <button
                  onClick={toggleExpanded}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  {isExpanded ? "Mostra meno dettagli" : "Mostra tutti i dettagli"}
                  <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione dettagli completi (espandibile) */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Specifiche tecniche complete */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-cogs text-white"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Specifiche Tecniche</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500 font-medium">MARCA E MODELLO</p>
                    <p className="text-lg font-semibold text-gray-900">{car.brand} {car.model}</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500 font-medium">ANNO DI IMMATRICOLAZIONE</p>
                    <p className="text-lg font-semibold text-gray-900">{car.year}</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500 font-medium">COLORE</p>
                    <p className="text-lg font-semibold text-gray-900">{car.color || "Non specificato"}</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500 font-medium">CARBURANTE</p>
                    <p className="text-lg font-semibold text-gray-900">{car.fuelType}</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <p className="text-sm text-gray-500 font-medium">TRASMISSIONE</p>
                    <p className="text-lg font-semibold text-gray-900">{car.transmission}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-500 font-medium">POTENZA</p>
                    <p className="text-lg font-semibold text-gray-900">{car.horsepower} HP</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-500 font-medium">CILINDRATA</p>
                    <p className="text-lg font-semibold text-gray-900">{car.displacement} cc</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-500 font-medium">EMISSIONI</p>
                    <p className="text-lg font-semibold text-gray-900">{car.emissionClass}</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-500 font-medium">CONSUMO</p>
                    <p className="text-lg font-semibold text-gray-900">{car.consumption} km/l</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-sm text-gray-500 font-medium">CHILOMETRAGGIO</p>
                    <p className="text-lg font-semibold text-gray-900">{car.km.toLocaleString("it-IT")} km</p>
                  </div>
                </div>
              </div>

              {car.vin && (
                <div className="mt-8 pt-6 border-t">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 font-medium mb-1">NUMERO DI TELAIO (VIN)</p>
                    <p className="font-mono text-sm text-gray-900">{car.vin}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Comfort e dotazioni */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-star text-white"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Comfort e Dotazioni</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Porte", value: car.doors, icon: "fas fa-door-open" },
                  { label: "Posti", value: car.seats, icon: "fas fa-users" },
                  { label: "Consumo", value: `${car.consumption} km/l`, icon: "fas fa-gas-pump" },
                  { label: "Categoria", value: car.category, icon: "fas fa-tag" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <i className={`${item.icon} text-2xl text-orange-600 mb-2`}></i>
                    <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Descrizione</h3>
                <p className="text-gray-700 leading-relaxed">
                  {car.description}
                </p>
              </div>

              
            </div>
          </div>
        </div>

        {/* Footer con CTA */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessato a questo veicolo?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I nostri consulenti sono a tua disposizione per fornirti tutte le informazioni necessarie 
              e organizzare una prova su strada senza impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              
              <button className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
               <Link to="/contattaci">
                Contattaci Ora
              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}