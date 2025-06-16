import React, { useEffect, useState, useRef } from "react";

/**
 * COMPONENTE CAROUSEL PER AUTO
 *
 * Questo componente crea un carousel interattivo per mostrare auto in vendita.
 * Caratteristiche principali:
 * - Auto-rotazione ogni 5 secondi
 * - Pausa al passaggio del mouse (hover)
 * - Navigazione manuale con frecce e indicatori
 * - Animazioni fluide e responsive
 * - Design moderno con overlay e gradienti
 */
const CarCarousel = () => {
  // =====================================
  // DATI DELLE AUTO
  // =====================================

  /**
   * Array contenente i dati delle auto da mostrare nel carousel.
   * Ogni oggetto contiene: URL immagine, titolo e prezzo
   */
  const images = [
    {
      src: "https://wallpapercat.com/w/full/4/7/2/1773402-3840x2160-desktop-4k-bmw-3-series-wallpaper-photo.jpg",
      title: "BMW Serie 3",
      price: "€45.900",
    },
    {
      src: "https://images2.alphacoders.com/129/1297353.jpg",
      title: "Audi A4 Avant",
      price: "€38.500",
    },
    {
      src: "https://i.bstr.es/highmotor/2021/02/2022-Mercedes-Benz-C-Class-16-1.jpg",
      title: "Mercedes C-Class",
      price: "€52.300",
    },
  ];

  // =====================================
  // STATI DEL COMPONENTE (REACT HOOKS)
  // =====================================

  /**
   * current: indice dell'immagine attualmente visualizzata (0, 1, 2...)
   * Inizializza a 0 per mostrare la prima auto
   */
  const [current, setCurrent] = useState(0);

  /**
   * isPlaying: controlla se l'auto-rotazione è attiva
   * true = carousel si muove automaticamente, false = fermo
   */
  const [isPlaying, setIsPlaying] = useState(true);

  /**
   * isHovered: indica se il mouse è sopra il carousel
   * Usato per mettere in pausa l'auto-rotazione durante l'hover
   */
  const [isHovered, setIsHovered] = useState(false);

  /**
   * loaded: controlla se il componente è stato caricato
   * Usato per l'animazione di fade-in iniziale
   */
  const [loaded, setLoaded] = useState(false);

  /**
   * intervalRef: riferimento all'intervallo per l'auto-rotazione
   * useRef mantiene il riferimento tra i re-render senza causare re-render
   */
  const intervalRef = useRef(null);

  // =====================================
  // EFFETTI (useEffect HOOKS)
  // =====================================

  /**
   * EFFETTO 1: Animazione di caricamento iniziale
   * Si esegue solo al primo render (array vuoto [])
   * Imposta loaded=true per attivare l'animazione di fade-in
   */
  useEffect(() => {
    setLoaded(true);
  }, []);

  /**
   * EFFETTO 2: Gestione dell'auto-rotazione
   * Si ri-esegue quando cambiano: images.length, isPlaying, isHovered
   *
   * Logica:
   * - Se isPlaying=true E isHovered=false → avvia timer
   * - Altrimenti → ferma timer
   * - Cleanup: ferma sempre il timer quando l'effetto si ri-esegue o il componente si smonta
   */
  useEffect(() => {
    if (isPlaying && !isHovered) {
      // Crea un intervallo che cambia slide ogni 5 secondi
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length); // Operatore modulo per tornare a 0 dopo l'ultima immagine
      }, 5000);
    } else {
      // Ferma l'intervallo se in pausa o durante hover
      clearInterval(intervalRef.current);
    }

    // CLEANUP FUNCTION: importante per evitare memory leaks
    return () => clearInterval(intervalRef.current);
  }, [images.length, isPlaying, isHovered]);

  // =====================================
  // FUNZIONI DI NAVIGAZIONE
  // =====================================

  /**
   * goTo: va direttamente a una slide specifica
   */
  const goTo = (index) => setCurrent(index);

  /**
   * next: va alla slide successiva
   * Usa l'operatore modulo (%) per tornare a 0 dopo l'ultima slide
   */
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  /**
   * prev: va alla slide precedente
   * Aggiunge images.length prima di sottrarre per evitare numeri negativi
   */
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  /**
   * scrollToNext: scorre la pagina verso il basso (scroll smooth)
   * Moltiplicatore 1.8 per andare oltre la prima viewport
   */
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 1.8,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        "relative w-full transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}"
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HERO CONTAINER */}
      <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-black">
        {/* IMMAGINI CAROUSEL */}
        <div className="absolute inset-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                idx === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* CONTENUTO CENTRALE */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
              {images[current].title}
            </h1>
            <div className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-lg">
              {images[current].price}
            </div>
            <button
              onClick={scrollToNext}
              className="bg-white text-black px-12 py-4 text-xl font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Scopri di più
            </button>
          </div>
        </div>

        {/* CONTROLLI NAVIGAZIONE */}
        <button
          onClick={prev}
          className={`absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-30 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-60 -translate-x-4"
          }`}
        >
          ‹
        </button>

        <button
          onClick={next}
          className={`absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl z-30 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-60 translate-x-4"
          }`}
        >
          ›
        </button>

        {/* INDICATORI SLIDES */}
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

        {/* BARRA PROGRESSO */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-500 ease-linear"
            style={{
              width: `${((current + 1) / images.length) * 100}%`,
              transition: "width 5s linear",
            }}
          />
        </div>
      </div>

      {/* EFFETTO FADE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default CarCarousel;
