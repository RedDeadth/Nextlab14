// src/app/sitemap.js

const URL = 'https://nextlab14-gada.vercel.app';

// Simula la obtención de datos dinámicos (de un CMS o Base de Datos)
async function getDynamicPosts() {
  // En un caso real, aquí harías una llamada a tu API.
  const posts = [
    { slug: 'aprende-seo-en-nextjs', updatedAt: '2024-06-24T10:00:00.000Z' },
    { slug: 'guia-completa-de-sitemaps', updatedAt: '2024-06-23T12:00:00.000Z' },
  ];
  return posts;
}

export default async function sitemap() {
  const posts = await getDynamicPosts();

  const postUrls = posts.map(post => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
  }));

  const staticUrls = [
    {
      url: `${URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...staticUrls, ...postUrls];
}