import { Poppins } from 'next/font/google';

import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
