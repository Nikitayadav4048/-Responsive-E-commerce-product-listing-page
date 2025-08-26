import { useCartStore } from '../lib/store.js';

export const ProductModal = ({ product, onClose }) => {
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
            <div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
              <p className="text-sm text-gray-500 mb-4">
                Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-green-600">${product.price}</span>
                <button
                  onClick={() => {
                    addItem(product);
                    onClose();
                  }}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};