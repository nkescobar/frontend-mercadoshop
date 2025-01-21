"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/styles/header.css';
import logo from '@/shared/assets/images/logo.png';

export default function Header({ onSearch }: { onSearch: (query: string) => void }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.trim()); // Llama siempre la búsqueda, incluso si está vacío
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-title" onClick={() => router.push('/')}>
          <Image
            src={logo.src}
            alt="Logo"
            width={50}
            height={50}
            className="header-logo"
          />
          <h1 className="header-title">Mercado Shop</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
}
