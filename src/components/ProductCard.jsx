import { useCartStore } from '../lib/store.js';

export const ProductCard = ({ product, onViewDetails }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 cursor-pointer"
        onClick={() => onViewDetails(product)}
      />
      <h3 className="font-semibold text-lg mb-2 truncate">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.description.slice(0, 80)}...</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-green-600">${product.price}</span>
        <button
          onClick={() => addItem(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};