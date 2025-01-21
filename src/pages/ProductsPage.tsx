"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/shared/api/products";
import '@/styles/products.css';

interface Product {
  id: string;
  title: string;
  price: { currency: string; amount: number; decimals: number };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.picture} alt={product.title} width="100" />
            <h2>{product.title}</h2>
            <p>
              Precio: {product.price.currency} {product.price.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
