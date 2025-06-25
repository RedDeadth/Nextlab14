import React from 'react';

const LargeComponent = () => {
  // Simulamos un componente pesado con un bucle o una lógica compleja
  let items = [];
  for (let i = 0; i < 1000; i++) {
    items.push(<li key={i}>Elemento de lista #{i + 1}</li>);
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Este es un componente grande cargado dinámicamente.</h2>
      <p>Su contenido solo aparece en el lado del cliente después de un breve instante.</p>
      <ul style={{ height: '150px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px' }}>
        {items}
      </ul>
    </div>
  );
};

export default LargeComponent;
