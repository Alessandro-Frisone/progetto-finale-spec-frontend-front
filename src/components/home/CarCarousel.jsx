import React, { useEffect, useState } from "react";

const CarCarousel = () => {
  const images = ["/carousel-1.jpg", "/carousel-2.jpg", "/carousel-3.jpg"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goTo = (index) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full mb-2">
      {/* Frecce esterne */}
      <button
        onClick={prev}
        className="absolute left-[190px] top-1/2 transform -translate-y-1/2 bg-white shadow-md border border-gray-300 text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-[190px] top-1/2 transform -translate-y-1/2 bg-white shadow-md border border-gray-300 text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
      >
        ›
      </button>

      {/* Carosello */}
      <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Auto usata ${idx + 1}`}
              className="w-full h-[500px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Indicatori */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goTo(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                index === current
                  ? "bg-white scale-110"
                  : "bg-gray-500 hover:scale-105"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
