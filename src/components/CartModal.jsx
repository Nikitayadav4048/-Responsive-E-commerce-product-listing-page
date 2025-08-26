import { useState } from 'react';
import { useCartStore } from '../lib/store.js';
import { OrderSuccessModal } from './OrderSuccessModal.jsx';

export const CartModal = ({ isOpen, onClose, onCheckout }) => {
  const { items, removeItem } = useCartStore();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto mx-4">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold">Cart ({totalItems})</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl p-1">×</button>
          </div>
          
          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 border rounded">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.title}</h4>
                      <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      <p className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-xs px-2 py-1 flex-shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base sm:text-lg font-bold">Total: ${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => {
                    onCheckout();
                    onClose();
                  }}
                  className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const CartModalWithSuccess = ({ isOpen, onClose }) => {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  
  return (
    <>
      <CartModal 
        isOpen={isOpen && !showOrderSuccess} 
        onClose={onClose}
        onCheckout={() => setShowOrderSuccess(true)}
      />
      <OrderSuccessModal 
        isOpen={showOrderSuccess} 
        onClose={() => {
          setShowOrderSuccess(false);
          onClose();
        }} 
      />
    </>
  );
};