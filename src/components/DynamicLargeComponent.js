"use client";

import dynamic from 'next/dynamic';

// Importamos dinámicamente LargeComponent sin SSR
const DynamicLargeComponent = dynamic(() => import('./LargeComponent'), {
  ssr: false,
  // Es una buena práctica añadir un estado de carga
  loading: () => <p>Cargando componente...</p>,
});

export default DynamicLargeComponent;
