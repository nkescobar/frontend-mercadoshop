"use client";
import '@/styles/home.css';
import Image from 'next/image';
import logo from '@/shared/assets/images/logo.png';

export default function HomePage() {
  return (
    <div className="home-container">
      <h2 className="main-title">Bienvenido a Mercado Search</h2>
      <p className="main-text">
        Encuentra los mejores productos con nuestra búsqueda fácil y rápida.
      </p>
      <Image 
       src={logo.src}
        alt="Shopping"
        className="main-image"
        width={500}
        height={500}
      />
    </div>
  );
}
