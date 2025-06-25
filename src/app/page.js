import dynamic from "next/dynamic";
import DynamicLargeComponent from "../components/DynamicLargeComponent";
import Link from 'next/link';

// Objeto metadata para SEO
export const metadata = {
  title: 'Inicio | Mi Proyecto SEO',
  description: 'Bienvenido a la página de inicio de Mi Proyecto SEO. Aprende sobre nuestras optimizaciones y servicios.',
  openGraph: {
    title: 'Inicio | Mi Proyecto SEO',
    description: 'Descubre cómo estamos mejorando nuestro SEO con Next.js.',
    url: 'https://tu-dominio.com/',
    images: [
      {
        url: '/og-image-home.png', // Ruta a tu imagen en la carpeta /public
        width: 1200,
        height: 630,
        alt: 'Imagen de la Página de Inicio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inicio | Mi Proyecto SEO',
    description: 'Bienvenido a la página de inicio de Mi Proyecto SEO.',
    images: ['/og-image-home.png'], // Ruta a tu imagen en la carpeta /public
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-4">Página de Inicio</h1>
      <p className="text-lg mb-8">Bienvenido a nuestro proyecto de optimización SEO.</p>
      <nav className="flex gap-4">
        <Link href="/blog" className="text-blue-500 hover:underline">Ir al Blog</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Ir a Contacto</Link>
      </nav>
    </main>
  );
}
