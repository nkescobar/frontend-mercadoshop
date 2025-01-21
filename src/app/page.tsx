"use client";

import { useState, useEffect } from 'react';
import ProductList from '@/components/ProductList';
import Header from '@/components/Header';
import { fetchProducts } from '@/shared/api/products';
import { Product } from '@/shared/types/product';
import '@/styles/home.css';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleSearch = (query: string) => {
    console.log('query ---', query)
    if (query.trim() === '') {
      // Si el input está vacío, mostrar todos los productos
      setFilteredProducts(products);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.price.amount.toString().includes(lowerCaseQuery)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="home-container">
      <Header onSearch={handleSearch} />
      <h2 className="main-title">Bienvenido a Mercado Search</h2>
      <p className="main-text">
        Encuentra los mejores productos con nuestra búsqueda fácil y rápida.
      </p>
      <ProductList products={filteredProducts} />
    </div>
  );
}
