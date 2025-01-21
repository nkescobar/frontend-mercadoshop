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
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleSearch = (query: string) => {
    setCurrentPage(0);

    if (query.trim() === '') {
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
      <Header products={products} onSearch={handleSearch} />
      <h2 className="main-title">Bienvenido a Mercado Shop</h2>
      <p className="main-text">
        Encuentra los mejores productos con nuestra búsqueda fácil y rápida.
      </p>
      <ProductList 
        products={filteredProducts} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}
