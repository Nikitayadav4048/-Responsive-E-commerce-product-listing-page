import { create } from 'zustand';
import { Product, CartItem } from '@/types';

interface SearchFilterStore {
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
}

export const useSearchFilterStore = create<SearchFilterStore>((set) => ({
  searchTerm: '',
  selectedCategory: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return { items: [...state.items, { ...product, quantity: 1 }] };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: quantity === 0
      ? state.items.filter(item => item.id !== id)
      : state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
  })),
  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
}));