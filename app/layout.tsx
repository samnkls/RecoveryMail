import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Store - Sua Loja de Tecnologia',
  description: 'Encontre os melhores produtos de tecnologia com os melhores preços.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
