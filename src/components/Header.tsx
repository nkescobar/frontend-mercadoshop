"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '@/styles/header.css';
import logo from '@/shared/assets/images/logo.png';

export default function Header() {
  const router = useRouter();

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
          <h1 className="header-title">Mercado Search</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-input"
          />
          <button className="search-button">Buscar</button>
        </div>
      </div>
    </header>
  );
}
