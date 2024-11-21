import React from 'react';

const Maintenance = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Sitio en Mantenimiento</h1>
        <p style={styles.text}>
          Estamos trabajando para mejorar tu experiencia. Por favor, vuelve más tarde.
        </p>
        <div style={styles.loader}></div>
        <p style={styles.footer}>Gracias por tu paciencia.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    background: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid #ddd',
    borderTop: '5px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '20px auto',
  },
  footer: {
    fontSize: '0.9rem',
    color: '#777',
    marginTop: '10px',
  },
};

// Keyframes for the loader animation
if (typeof window !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, styleSheet.cssRules.length);
}

export default Maintenance;
