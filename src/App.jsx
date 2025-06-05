import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <FavoritesProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </FavoritesProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}