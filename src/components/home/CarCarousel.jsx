import React, { useEffect, useState, useRef } from "react";

const CarCarousel = () => {
  const images = [
    {
      src: "https://wallpapercat.com/w/full/4/7/2/1773402-3840x2160-desktop-4k-bmw-3-series-wallpaper-photo.jpg",
      title: "BMW Serie 3",
      price: "€45.900"
    },
    {
      src: "https://images2.alphacoders.com/129/1297353.jpg", 
      title: "Audi A4 Avant",
      price: "€38.500"
    },
    {
      src: "https://i.bstr.es/highmotor/2021/02/2022-Mercedes-Benz-C-Class-16-1.jpg",
      title: "Mercedes C-Class",
      price: "€52.300"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [images.length, isPlaying, isHovered]);

  const goTo = (index) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight *1.4,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`relative w-full transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero Container - Full Width */}
      <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-black">
        
        {/* Contenitore Immagini */}
        <div className="absolute inset-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                idx === current 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Scuro per Leggibilità */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* Contenuto Centrale */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            
            {/* Titolo Principale */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
              {images[current].title}
            </h1>
            
            {/* Prezzo */}
            <div className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-lg">
              {images[current].price}
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToNext}
              className="bg-white text-black px-12 py-4 text-xl font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Scopri di più
            </button>
          </div>
        </div>

        {/* Controlli di Navigazione */}
        <button
          onClick={prev}
          className={`absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-30 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 -translate-x-4'
          }`}
        >
          ‹
        </button>
        
        <button
          onClick={next}
          className={`absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-30 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-4'
          }`}
        >
          ›
        </button>

        {/* Indicatori Minimalisti */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-16 h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "bg-white shadow-lg scale-110"
                  : "bg-white/40 hover:bg-white/70 hover:scale-105"
              }`}
            />
          ))}
        </div>

        {/* Barra di Progresso */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-500 ease-linear"
            style={{ 
              width: `${((current + 1) / images.length) * 100}%`,
              transition: 'width 5s linear'
            }}
          />
        </div>
      </div>

      {/* Effetto Fade Bottom per Transizione Smooth */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default CarCarousel;