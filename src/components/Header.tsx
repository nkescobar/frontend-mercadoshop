"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/styles/header.css';
import logo from '@/shared/assets/images/logo.png';
import { Product } from '@/shared/types/product';
export default function Header({
  products,
  onSearch
}: {
  readonly products: Product[];
  readonly onSearch: (query: string) => void;
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  const handleSearch = (query: string) => {
    onSearch(query.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    handleSearch(query);
  };

  const handleSuggestionClick = (product: Product) => {
    setSearchTerm(product.title);
    setSuggestions([]);
    handleSearch(product.title);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-title" onClick={() => router.push('/')}>
          <Image src={logo.src} alt="Logo" width={50} height={50} className="header-logo" />
          <h1 className="header-title">Shop</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-input"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchTerm)}
          />
          <button className="search-button" onClick={() => handleSearch(searchTerm)}>
            Buscar
          </button>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((product) => (
                <li key={product.id} onClick={() => handleSuggestionClick(product)}>
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
