export const OrderSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-sm w-full p-4 sm:p-6 text-center mx-4">
        <div className="text-4xl sm:text-6xl mb-4">🎉</div>
        <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">Order Successful!</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">Your order has been placed successfully. Thank you for shopping with us!</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors text-sm sm:text-base"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};