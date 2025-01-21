import { Product } from '@/shared/types/product';

export const API_URL = "http://localhost:5000";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/items`);
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    const data = await response.json();
    console.log('items --->', data)
    // Validar si los datos contienen la estructura esperada
    if (data && Array.isArray(data)) {
      return data as Product[];
    } else {
      console.error("Estructura incorrecta de los datos recibidos:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
