const API_URL = import.meta.env.VITE_API_URL;

// ==================== FUNZIONE: RECUPERO TUTTE LE AUTO ====================
// ASYNC FUNCTION: Funzione asincrona per recuperare tutte le auto dal server
// Utilizza il pattern async/await per gestire le Promise
export async function fetchCars() {
  try {
    // HTTP REQUEST: Effettua una richiesta HTTP GET
    // fetch() è l'API nativa del browser per le richieste HTTP
    // Template literals (`${}`) per costruire l'URL dinamicamente
    const res = await fetch(`${API_URL}/cars`);
    
    // ERROR HANDLING: Controllo dello status HTTP
    // res.ok è true se status è 200-299
    if (!res.ok) throw new Error("Errore durante il recupero delle auto");
    
    // JSON PARSING: Converte la risposta da JSON a oggetto JavaScript
    // res.json() restituisce una Promise, quindi serve await
    return await res.json();
    
  } catch (err) {
    // EXCEPTION HANDLING: Gestione degli errori
    // Cattura sia errori di rete che errori lanciati manualmente
    console.error("Errore in fetchCars:", err);
    
    // FALLBACK VALUE: Restituisce un array vuoto in caso di errore
    // Previene il crash dell'applicazione
    return [];
  }
}

// ==================== FUNZIONE: RECUPERO AUTO SINGOLA ====================
// PARAMETRIC FUNCTION: Funzione che accetta un parametro ID
// Utilizza il pattern di URL dinamico con parametri
export async function fetchCarById(id) {
  try {
    // DYNAMIC URL: Costruisce l'URL includendo l'ID nel path
    // Template literals per interpolazione della variabile
    const res = await fetch(`${API_URL}/cars/${id}`);
    
    // SPECIFIC ERROR: Messaggio di errore specifico con l'ID
    // Template literals per messaggi dinamici
    if (!res.ok) throw new Error(`Auto con ID ${id} non trovata`);
    
    // JSON PARSING: Conversione della risposta
    const data = await res.json();
    
    // DATA EXTRACTION: Estrae il campo specifico dalla risposta
    // Dipende dalla struttura della risposta del backend
    // Esempio: { success: true, car: {...} } -> restituisce solo car
    return data.car;
    
  } catch (err) {
    // ERROR LOGGING: Log dell'errore per debugging
    console.error("Errore in fetchCarById:", err);
    
    // NULL FALLBACK: Restituisce null per indicare "non trovato"
    // Differenzia tra "errore" (null) e "lista vuota" ([])
    return null;
  }
}



// // Funzione per eliminare un'auto (DELETE)
// export async function deleteCar(id) {
//   try {
//     const res = await fetch(`${API_URL}/cars/${id}`, {
//       method: 'DELETE', // HTTP DELETE per eliminazione
//     });
    
//     if (!res.ok) throw new Error(`Errore durante l'eliminazione dell'auto ${id}`);
    
//     // DELETE spesso restituisce solo status, non JSON
//     // Verifica se c'è contenuto prima di fare il parsing
//     const contentType = res.headers.get('content-type');
//     if (contentType && contentType.includes('application/json')) {
//       return await res.json();
//     }
    
//     // Restituisce true se l'eliminazione è riuscita
//     return true;
    
//   } catch (err) {
//     console.error("Errore in deleteCar:", err);
//     return false;
//   }
// }