import { Poppins } from 'next/font/google';

import "./globals.css";
import Header from '@/components/Header';
import Link from 'next/link';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/products">Productos</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
