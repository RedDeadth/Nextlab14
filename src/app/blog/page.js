// src/app/blog/page.js

// Metadata para la página de Blog
export const metadata = {
  title: 'Blog | Mi Proyecto SEO',
  description: 'Lee nuestros últimos artículos sobre desarrollo web, SEO y tecnología en nuestro blog.',
  openGraph: {
    title: 'Blog de Mi Proyecto SEO',
    description: 'Artículos y tutoriales sobre las últimas tendencias en tecnología.',
    url: 'https://tu-dominio.com/blog',
    images: [
      {
        url: '/og-image-blog.png', // Crea y añade esta imagen en la carpeta /public
        width: 1200,
        height: 630,
        alt: 'Imagen del Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Mi Proyecto SEO',
    description: 'Lee nuestros últimos artículos sobre desarrollo web, SEO y tecnología.',
    images: ['/og-image-blog.png'], // Ruta a tu imagen en la carpeta /public
  },
};

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Nuestro Blog</h1>
      <p>
        Aquí encontrarás nuestros últimos artículos sobre desarrollo, SEO y más.
      </p>
      {/* Aquí podrías listar tus artículos */}
    </main>
  );
}