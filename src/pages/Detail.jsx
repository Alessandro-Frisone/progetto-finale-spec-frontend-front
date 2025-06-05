import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCarById } from "../services/api";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Detail() {
  const { id } = useParams();
const [car, setCar] = useState(null);
const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

useEffect(() => {
  async function loadCar() {
    const data = await fetchCarById(id);
    setCar(data);
  }
  loadCar();
}, [id]);

// Proteggi l'accesso a car.id
const isCarFavorite = car ? isFavorite(car.id) : false;

const handleFavoriteClick = () => {
  if (!car) return; // opzionale: evita azioni premature
  if (isCarFavorite) {
    removeFromFavorites(car.id);
  } else {
    addToFavorites(car);
  }
};
if (!car) {
  return (
    <div className="flex justify-center items-center py-20">
      <span className="text-orange-600 font-semibold">Caricamento auto...</span>
    </div>
  );
}



  return (
    <div className="max-w-auto mx-auto mt-10 space-y-8 px-4">
      {/* Sezione Call To Action */}
      <div className="max-w-6xl mx-auto">
        <section className="animate-pulse bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0 text-center md:text-left">
            Interessato a {car.title}?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow hover:bg-orange-100 transition-all duration-300 ease-in-out">
              Prenota Test Drive
            </button>
            <button className="px-6 py-3 rounded-full bg-orange-700 hover:bg-orange-800 font-semibold shadow transition-all duration-300 ease-in-out">
              Contatta il Venditore
            </button>
          </div>
        </section>
      </div>

      {/* Card principale con immagine e dettagli */}
      <div className="max-w-12xl bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Immagine a sinistra */}
          {car.imageUrl ? (
            <img
              src={car.imageUrl}
              alt={car.title}
              className="w-full h-full object-cover md:h-auto"
            />
          ) : (
            <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
              Nessuna immagine
            </div>
          )}

          {/* Dettagli a destra */}
          <div className="p-6 flex flex-col justify-between relative">
            {/* Prezzo e cuore in alto a destra */}
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 text-3xl font-extrabold px-5 py-3 rounded-xl shadow-lg">
                € {car.price.toLocaleString("it-IT")}
              </span>
              
              {/* Bottone cuore */}
              <button
                onClick={handleFavoriteClick}
                aria-label={
                  isCarFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
                }
                className={`text-2xl cursor-pointer focus:outline-none transform transition-all duration-200 p-2 rounded-full
                ${
                  isCarFavorite
                    ? "text-orange-500 hover:text-orange-600 bg-orange-50 hover:bg-orange-100"
                    : "text-gray-400 hover:text-orange-400 bg-gray-50 hover:bg-orange-50"
                } 
                hover:scale-110 shadow-sm`}
              >
                <i className={isCarFavorite ? "fas fa-heart" : "far fa-heart"}></i>
              </button>
            </div>

            <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center md:text-left mt-20 md:mt-0">
              {car.title}
            </h1>

            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Categoria:</span>
                <span className="text-orange-500">{car.category}</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Marca:</span>
                <span>{car.brand}</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Modello:</span>
                <span>{car.model}</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Anno:</span>
                <span>{car.year}</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Chilometri:</span>
                <span>{car.km.toLocaleString("it-IT")} km</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Carburante:</span>
                <span>{car.fuelType}</span>
              </li>
              <li className="flex justify-between border-b pb-2 border-gray-200">
                <span className="font-semibold text-gray-600">Cambio:</span>
                <span>{car.transmission}</span>
              </li>
              {car.color && (
                <li className="flex justify-between border-b pb-2 border-gray-200">
                  <span className="font-semibold text-gray-600">Colore:</span>
                  <span>{car.color}</span>
                </li>
              )}
              {car.vin && (
                <li className="flex justify-between border-b pb-2 border-gray-200">
                  <span className="font-semibold text-gray-600">VIN:</span>
                  <span>{car.vin}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Sezione Descrizione */}
        <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">
            Descrizione
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {car.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel velit sit amet libero efficitur laoreet. Vivamus posuere bibendum sapien, vitae suscipit nibh sodales quis."}
          </p>
        </section>
      </div>

      {/* Sezione Punti Chiave */}
      <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Punti Chiave
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.horsepower ?? "--"} HP
            </span>
            <span className="text-sm text-gray-600 mt-1">Potenza</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.displacement ?? "--"} cc
            </span>
            <span className="text-sm text-gray-600 mt-1">Cilindrata</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.doors ?? "--"}
            </span>
            <span className="text-sm text-gray-600 mt-1">Porte</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.seats ?? "--"}
            </span>
            <span className="text-sm text-gray-600 mt-1">Posti</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.consumption ?? "--"} km/l
            </span>
            <span className="text-sm text-gray-600 mt-1">Consumo</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl font-bold text-orange-600">
              {car.emissionClass ?? "--"}
            </span>
            <span className="text-sm text-gray-600 mt-1">Classe Emissioni</span>
          </div>
        </div>
      </section>
    </div>
  );
}