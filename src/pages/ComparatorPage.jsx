// src/pages/ComparatorPage.jsx
import { useComparator } from "../contexts/ComparatorContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ComparatorPage() {
  const { selectedCars, clearComparator } = useComparator();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (selectedCars.length < 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <i className="fas fa-balance-scale text-6xl text-gray-400 mb-6"></i>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Comparatore Vuoto
            </h1>
            <p className="text-gray-600 mb-6">
              Seleziona almeno 2 auto per utilizzare il comparatore.
            </p>
            <Link
              to="/"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Configurazione delle categorie di specifiche da confrontare
  const specCategories = [
    {
      title: "Informazioni Generali",
      icon: "fas fa-info-circle",
      specs: [
        { label: "Marca", key: "brand" },
        { label: "Modello", key: "model" },
        { label: "Anno", key: "year" },
        { label: "Categoria", key: "category" },
        { label: "Prezzo", key: "price", format: "price" },
      ]
    },
    {
      title: "Motorizzazione",
      icon: "fas fa-cogs",
      specs: [
        { label: "Carburante", key: "fuelType" },
        { label: "Potenza", key: "horsepower", format: "hp" },
        { label: "Cilindrata", key: "displacement", format: "cc" },
        { label: "Trasmissione", key: "transmission" },
        { label: "Consumo", key: "consumption", format: "consumption" },
      ]
    },
    {
      title: "Caratteristiche Fisiche",
      icon: "fas fa-car",
      specs: [
        { label: "Chilometraggio", key: "km", format: "km" },
        { label: "Porte", key: "doors" },
        { label: "Posti", key: "seats" },
        { label: "Colore", key: "color" },
        { label: "Classe Emissioni", key: "emissionClass" },
      ]
    }
  ];

  // Funzione per formattare i valori
  const formatValue = (value, format) => {
    if (value === null || value === undefined) return "Non specificato";
    
    switch (format) {
      case "price":
        return `€ ${value.toLocaleString("it-IT")}`;
      case "hp":
        return `${value} HP`;
      case "cc":
        return `${value} cc`;
      case "km":
        return `${value.toLocaleString("it-IT")} km`;
      case "consumption":
        return `${value} km/l`;
      default:
        return value;
    }
  };

  // Estrae i dati delle due auto selezionate
  const car1 = selectedCars[0];
  const car2 = selectedCars[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <i className="fas fa-balance-scale text-4xl text-blue-600"></i>
            <h1 className="text-4xl font-bold text-gray-800">
              Comparatore Auto
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confronta le caratteristiche delle tue auto selezionate per fare la scelta migliore
          </p>
        </div>

        {/* Cars Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {selectedCars.map((car, index) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`p-6 ${index === 0 ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-tag"></i>
                      <span className="text-lg font-medium">{car.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Auto {index + 1}</div>
                    <Link
                      to={`/detail/${car.id}`}
                      className="inline-flex items-center gap-2 mt-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      <i className="fas fa-eye"></i>
                      Dettagli
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Immagine dell'auto */}
              <div className="p-6">
                {car.imageUrl ? (
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <i className="fas fa-car text-4xl mb-2"></i>
                      <p>Immagine non disponibile</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {specCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <i className={`${category.icon} text-2xl text-gray-600`}></i>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
              </div>
              
              {/* Specs Rows */}
              {category.specs.map((spec, specIndex) => (
                <div key={specIndex} className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 last:border-b-0">
                  {/* Spec Label */}
                  <div className="p-6 bg-gray-50 font-semibold text-gray-700 flex items-center">
                    {spec.label}
                  </div>
                  
                  {/* Car 1 Value */}
                  <div className="p-6 flex items-center border-r border-gray-100 lg:border-r-0">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-800 font-medium">
                        {formatValue(car1[spec.key], spec.format)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Car 2 Value */}
                  <div className="p-6 flex items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-800 font-medium">
                        {formatValue(car2[spec.key], spec.format)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 inline-flex items-center gap-2 font-semibold"
          >
            <i className="fas fa-arrow-left"></i>
            Torna alla Home
          </Link>
          
          <button
            onClick={clearComparator}
            className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 inline-flex items-center gap-2 font-semibold"
          >
            <i className="fas fa-trash"></i>
            Svuota Comparatore
          </button>
          
          <button
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 inline-flex items-center gap-2 font-semibold"
            onClick={() => window.print()}
          >
            <i className="fas fa-print"></i>
            Stampa Confronto
          </button>
        </div>
      </div>
    </div>
  );
}