const API_URL = import.meta.env.VITE_API_URL;

// GET all cars
export async function fetchCars() {
  try {
    const res = await fetch(`${API_URL}/cars`);
    if (!res.ok) throw new Error("Errore durante il recupero delle auto");
    return await res.json();
  } catch (err) {
    console.error("Errore in fetchCars:", err);
    return [];
  }
}

// GET single car by ID
export async function fetchCarById(id) {
  try {
    const res = await fetch(`${API_URL}/cars/${id}`);
    if (!res.ok) throw new Error(`Auto con ID ${id} non trovata`);
    const data = await res.json();
    return data.car; // dipende da come il backend risponde
  } catch (err) {
    console.error("Errore in fetchCarById:", err);
    return null;
  }
}
