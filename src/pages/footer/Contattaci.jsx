import React, { useState } from 'react';
import { useEffect } from "react";

// Componenti SVG personalizzati
const PhoneIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const MailIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const MapPinIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const ClockIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const SendIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
);

const CarIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6h4l2 5v6H5v-6l2-5h4"/>
    <line x1="5" y1="11" x2="19" y2="11"/>
  </svg>
);

const MessageCircleIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

const CalendarIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const StarIcon = ({ className, ...props }) => (
  <svg className={className} {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function Contattaci() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
    interesseAuto: '',
    dataContatto: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio form
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset dopo 3 secondi
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        messaggio: '',
        interesseAuto: '',
        dataContatto: ''
      });
    }, 3000);
  };

  const servizi = [
    {
      id: 1,
      titolo: "Valutazione Auto",
      descrizione: "Valutazione gratuita del tuo veicolo usato",
      icon: CarIcon,
      colore: "bg-orange-500"
    },
    {
      id: 2,
      titolo: "Finanziamenti",
      descrizione: "Soluzioni di finanziamento personalizzate",
      icon: MessageCircleIcon,
      colore: "bg-green-500"
    },
    {
      id: 3,
      titolo: "Garanzia",
      descrizione: "Garanzia estesa su tutti i nostri veicoli",
      icon: CalendarIcon,
      colore: "bg-purple-500"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header dinamico */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-red-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse absolute top-10 right-20 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="animate-pulse absolute bottom-10 left-20 w-24 h-24 bg-white opacity-5 rounded-full" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
              AUTODEAL
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Il tuo concessionario di fiducia per auto usate di qualità
            </p>
            <div className="mt-6 flex justify-center">
              <CarIcon className="w-12 h-12 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Form di contatto */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <SendIcon className="text-orange-600" />
              Contattaci Ora
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Messaggio Inviato!</h3>
                <p className="text-gray-600">Ti contatteremo presto per offrirti la migliore soluzione.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cognome *</label>
                    <input
                      type="text"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo di auto interessata</label>
                    <select
                      name="interesseAuto"
                      value={formData.interesseAuto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                    >
                      <option value="">Seleziona categoria</option>
                      <option value="city-car">City Car</option>
                      <option value="berlina">Berlina</option>
                      <option value="suv">SUV</option>
                      <option value="station-wagon">Station Wagon</option>
                      <option value="monovolume">Monovolume</option>
                      <option value="sportiva">Sportiva</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferenza contatto</label>
                    <input
                      type="date"
                      name="dataContatto"
                      value={formData.dataContatto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 group-hover:border-orange-300 resize-none"
                    placeholder="Descrivici le tue esigenze o facci delle domande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-5 h-5" />
                      Invia Messaggio
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Informazioni di contatto */}
          <div className="space-y-8">
            
            {/* Contatti principali */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorazioni di sfondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">Siamo Qui Per Te</h2>
                  <p className="text-gray-600 max-w-md mx-auto">Contattaci attraverso uno dei nostri canali. Il nostro team di esperti è pronto ad aiutarti a trovare l'auto perfetta.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {/* Telefono */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <PhoneIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">Chiamaci Ora</h3>
                          <p className="text-orange-600 font-semibold">+39 02 1234 5678</p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">Disponibili ora</span>
                        </div>
                        <p className="text-sm text-gray-500">Lun-Sab: 9:00-19:00</p>
                        <p className="text-sm text-gray-500">Consulenza gratuita</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <MessageCircleIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">WhatsApp</h3>
                          <p className="text-green-600 font-semibold">+39 345 678 9012</p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">Risposte rapide</span>
                        </div>
                        <p className="text-sm text-gray-500">7 giorni su 7</p>
                        <p className="text-sm text-gray-500">Chat istantanea</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {/* Email */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <MailIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                          <p className="text-amber-600 font-semibold">info@autodeal.it</p>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">Risposta garantita</span>
                        </div>
                        <p className="text-sm text-gray-500">Entro 2 ore lavorative</p>
                        <p className="text-sm text-gray-500">Preventivi dettagliati</p>
                      </div>
                    </div>
                  </div>

                  {/* Orari */}
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <ClockIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">Orari Showroom</h3>
                        </div>
                      </div>
                      <div className="space-y-2 pl-18">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lun-Ven</span>
                          <span className="text-sm font-semibold text-gray-800">9:00-19:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Sabato</span>
                          <span className="text-sm font-semibold text-gray-800">9:00-17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Domenica</span>
                          <span className="text-sm text-red-500">Chiuso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Showroom - Sezione espansa */}
                <div className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MapPinIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Vieni a Trovarci</h3>
                        <p className="text-orange-100 mb-4">Il nostro showroom di 2000 mq con oltre 150 auto esposte ti aspetta nel cuore di Milano</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3">📍 Indirizzo</h4>
                            <p className="text-orange-100">Via Roma 123</p>
                            <p className="text-orange-100">20121 Milano (MI)</p>
                            <p className="text-orange-100">Zona Porta Garibaldi</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-3">🚗 Come Raggiungerci</h4>
                            <div className="space-y-2 text-orange-100">
                              <p>🚇 Metro: Porta Garibaldi (2 min)</p>
                              <p>🚌 Bus: Linee 43, 94 (fermata Roma)</p>
                              <p>🅿️ Parcheggio gratuito clienti</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                            <MapPinIcon className="w-5 h-5" />
                            Apri Maps
                          </button>
                          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                            <CalendarIcon className="w-5 h-5" />
                            Prenota Visita
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team e servizi rapidi */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">👨‍💼</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Consulenti Esperti</h4>
                    <p className="text-sm text-gray-600">Team qualificato a tua disposizione</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">🔧</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Test Drive</h4>
                    <p className="text-sm text-gray-600">Prova gratuita senza impegno</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">💰</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Valutazione Auto</h4>
                    <p className="text-sm text-gray-600">Stima immediata del tuo usato</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}