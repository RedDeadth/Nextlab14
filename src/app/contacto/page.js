// src/app/contacto/page.js

// Metadata para la página de Contacto
export const metadata = {
  title: 'Contacto | Mi Proyecto SEO',
  description: 'Ponte en contacto con nosotros para cualquier consulta o propuesta. Estamos aquí para ayudarte.',
  openGraph: {
    title: 'Contacta con Mi Proyecto SEO',
    description: '¿Tienes alguna pregunta? Envíanos un mensaje.',
    url: 'https://tu-dominio.com/contacto',
    images: [
      {
        url: '/og-image-contact.png', // Crea y añade esta imagen en la carpeta /public
        width: 1200,
        height: 630,
        alt: 'Imagen de Contacto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Mi Proyecto SEO',
    description: 'Ponte en contacto con nosotros para cualquier consulta.',
    images: ['/og-image-contact.png'], // Ruta a tu imagen en la carpeta /public
  },
};

export default function ContactoPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Página de Contacto</h1>
      <p>
        Puedes contactarnos a través de este formulario (próximamente).
      </p>
    </main>
  );
}