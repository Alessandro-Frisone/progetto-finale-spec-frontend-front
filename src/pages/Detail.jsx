import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCarById } from "../services/api";

export default function Detail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function loadCar() {
      const data = await fetchCarById(id);
      setCar(data);
    }
    loadCar();
  }, [id]);

  if (!car) return <p>Caricamento in corso...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {car.title}
      </h1>

      {car.imageUrl && (
        <img
          src={car.imageUrl}
          alt={car.title}
          className="w-full h-64 object-cover rounded-xl mb-6 shadow-sm"
        />
      )}

      <ul className="space-y-4 text-sm sm:text-base text-gray-700">
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Categoria:</span>
          <span>{car.category}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Marca:</span>
          <span>{car.brand}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Modello:</span>
          <span>{car.model}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Anno:</span>
          <span>{car.year}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Chilometri:</span>
          <span>{car.km} km</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Prezzo:</span>
          <span>€ {car.price}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Carburante:</span>
          <span>{car.fuelType}</span>
        </li>
        <li className="flex justify-between border-b pb-2 border-gray-100">
          <span className="font-medium text-gray-600">Cambio:</span>
          <span>{car.transmission}</span>
        </li>
        {car.color && (
          <li className="flex justify-between border-b pb-2 border-gray-100">
            <span className="font-medium text-gray-600">Colore:</span>
            <span>{car.color}</span>
          </li>
        )}
        {car.vin && (
          <li className="flex justify-between border-b pb-2 border-gray-100">
            <span className="font-medium text-gray-600">VIN:</span>
            <span>{car.vin}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
