export default function ProductCard({ car }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2 truncate text-center">
        {car.title}
      </h2>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
        {car.category}
      </span>
    </div>
  );
}
