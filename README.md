# E-commerce Product Listing

A responsive e-commerce product listing page built with React, featuring search, filtering, product details, and shopping cart functionality.

## Features

- **Product Display**: Grid layout with product images, names, prices, and descriptions
- **Search & Filter**: Client-side search by product name and filter by category
- **Product Details**: Modal with full product information
- **Add Product Form**: Mock form with validation using React Hook Form and Zod
- **Shopping Cart**: Add products to cart with floating cart icon showing item count
- **Responsive Design**: Works on all device sizes

## Tech Stack

- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **Zustand** for state management
- **React Hook Form + Zod** for form handling and validation
- **Fake Store API** for product data

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-product-listing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## API Endpoints Used

- Get All Products: `https://fakestoreapi.com/products`
- Get Categories: `https://fakestoreapi.com/products/categories`
- Get Single Product: `https://fakestoreapi.com/products/{id}`

## Project Structure

```
src/
├── components/          # React components
│   ├── ProductCard.tsx
│   ├── SearchFilter.tsx
│   ├── ProductModal.tsx
│   ├── AddProductForm.tsx
│   └── CartIcon.tsx
├── lib/                # Utilities and stores
│   ├── api.ts          # API functions
│   └── store.ts        # Zustand stores
├── types/              # TypeScript interfaces
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Deployment

This project can be deployed to:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Live Demo

[Add your deployed URL here]