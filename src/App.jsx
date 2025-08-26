import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchProducts } from './lib/api.js';
import { useSearchFilterStore } from './lib/store.js';
import { SearchFilter } from './components/SearchFilter.jsx';
import { ProductCard } from './components/ProductCard.jsx';
import { ProductModal } from './components/ProductModal.jsx';
import { AddProductForm } from './components/AddProductForm.jsx';
import { CartIcon } from './components/CartIcon.jsx';
import { CartModalWithSuccess } from './components/CartModal.jsx';

const queryClient = new QueryClient();

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { searchTerm, selectedCategory } = useSearchFilterStore();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">E-commerce Store</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Add Product
          </button>
        </div>
        
        <SearchFilter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found matching your criteria.
          </div>
        )}
      </div>

      <CartIcon onClick={() => setShowCart(true)} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      {showAddForm && <AddProductForm onClose={() => setShowAddForm(false)} />}
      <CartModalWithSuccess isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductGrid />
    </QueryClientProvider>
  );
}

export default App;