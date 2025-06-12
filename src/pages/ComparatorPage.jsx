// src/pages/ComparatorPage.jsx
import { useComparator } from "../contexts/ComparatorContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ComparatorPage() {
  const { selectedCars, clearComparator } = useComparator();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (selectedCars.length < 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-balance-scale text-orange-600 text-xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Comparatore Vuoto
          </h1>
          <p className="text-gray-600 mb-8">
            Seleziona almeno 2 auto per utilizzare il comparatore.
          </p>
          <Link
            to="/"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-arrow-left"></i>
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }

  // Funzioni esistenti mantenute
  const extractBrandAndModel = (title) => {
    if (!title) return { brand: "Non specificato", model: "Non specificato" };
    const parts = title.split(" ");
    if (parts.length >= 2) {
      return {
        brand: parts[0],
        model: parts.slice(1).join(" "),
      };
    }
    return { brand: title, model: "Non specificato" };
  };

  const getSafeValue = (car, key) => {
    if (key === "brand") {
      return extractBrandAndModel(car.title).brand;
    }
    if (key === "model") {
      return extractBrandAndModel(car.title).model;
    }
    const value = car[key];
    return value !== null && value !== undefined && value !== "" ? value : null;
  };

  // Configurazione delle categorie
  const specCategories = [
    {
      title: "Informazioni Generali",
      specs: [
        { label: "Marca", key: "brand" },
        { label: "Modello", key: "model" },
        { label: "Anno", key: "year" },
        { label: "Categoria", key: "category" },
        { label: "Prezzo", key: "price", format: "price" },
      ],
    },
    {
      title: "Motorizzazione",
      specs: [
        { label: "Carburante", key: "fuelType" },
        { label: "Potenza", key: "horsepower", format: "hp" },
        { label: "Cilindrata", key: "displacement", format: "cc" },
        { label: "Trasmissione", key: "transmission" },
        { label: "Consumo", key: "consumption", format: "consumption" },
      ],
    },
    {
      title: "Caratteristiche",
      specs: [
        { label: "Chilometraggio", key: "km", format: "km" },
        { label: "Porte", key: "doors" },
        { label: "Posti", key: "seats" },
        { label: "Colore", key: "color" },
        { label: "Classe Emissioni", key: "emissionClass" },
      ],
    },
  ];

  const formatValue = (value, format) => {
    if (value === null || value === undefined || value === "") return "Non specificato";

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

  const isValueBetter = (value1, value2, key) => {
    if (value1 === null || value1 === undefined || value1 === "" ||
        value2 === null || value2 === undefined || value2 === "") {
      return false;
    }

    const higherIsBetter = ["horsepower", "year"];
    const lowerIsBetter = ["price", "km", "consumption"];

    if (higherIsBetter.includes(key)) {
      return parseFloat(value1) > parseFloat(value2);
    }
    if (lowerIsBetter.includes(key)) {
      return parseFloat(value1) < parseFloat(value2);
    }
    return false;
  };

  const car1 = selectedCars[0];
  const car2 = selectedCars[1];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comparatore Auto
          </h1>
          <p className="text-gray-600 text-lg">
            Confronta le caratteristiche delle tue auto selezionate
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {selectedCars.map((car, index) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`p-6 ${index === 0 ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
                    <p className="opacity-90">{car.category}</p>
                  </div>
                  <Link
                    to={`/detail/${car.id}`}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>

              <div className="p-6">
                {car.imageUrl ? (
                  <img
                    src={car.imageUrl}
                    alt={car.title}
                    className="w-full h-90 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-400">
                      <i className="fas fa-car text-4xl mb-2"></i>
                      <p>Immagine non disponibile</p>
                    </div>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">
                      {formatValue(getSafeValue(car, 'price'), 'price')}
                    </div>
                    <div className="text-sm text-gray-600">Prezzo</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">
                      {formatValue(getSafeValue(car, 'year'))}
                    </div>
                    <div className="text-sm text-gray-600">Anno</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {specCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
              {/* Category Header */}
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Specs */}
              <div className="divide-y divide-gray-100">
                {category.specs.map((spec, specIndex) => {
                  const value1 = getSafeValue(car1, spec.key);
                  const value2 = getSafeValue(car2, spec.key);
                  const isBetter1 = isValueBetter(value1, value2, spec.key);
                  const isBetter2 = isValueBetter(value2, value1, spec.key);

                  return (
                    <div key={specIndex} className="grid grid-cols-1 md:grid-cols-3">
                      {/* Spec Label */}
                      <div className="px-6 py-4 bg-gray-50 font-medium text-gray-900 border-b md:border-b-0 md:border-r border-gray-200">
                        {spec.label}
                      </div>

                      {/* Car 1 Value */}
                      <div className={`px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 ${
                        isBetter1 ? 'bg-green-50' : ''
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className={`font-medium ${
                            isBetter1 ? 'text-green-700' : 'text-gray-900'
                          }`}>
                            {formatValue(value1, spec.format)}
                          </span>
                          {isBetter1 && (
                            <i className="fas fa-trophy text-green-600 text-sm"></i>
                          )}
                        </div>
                      </div>

                      {/* Car 2 Value */}
                      <div className={`px-6 py-4 ${
                        isBetter2 ? 'bg-green-50' : ''
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className={`font-medium ${
                            isBetter2 ? 'text-green-700' : 'text-gray-900'
                          }`}>
                            {formatValue(value2, spec.format)}
                          </span>
                          {isBetter2 && (
                            <i className="fas fa-trophy text-green-600 text-sm"></i>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-arrow-left"></i>
            Torna alla Home
          </Link>

          <button
            onClick={clearComparator}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2 font-medium"
          >
            <i className="fas fa-trash"></i>
            Svuota Comparatore
          </button>

          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2 font-medium"
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