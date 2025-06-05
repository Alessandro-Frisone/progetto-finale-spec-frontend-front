import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">AUTODEAL</div>
        <Navbar/>
      </div>
    </header>
  );
}
