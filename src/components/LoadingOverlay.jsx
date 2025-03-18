import React from 'react';

const LoadingOverlay = ({ isLoading, theme }) => {
  if (!isLoading) return null;
  
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      opacity: 1,
      transition: 'opacity 300ms ease'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          border: '4px solid transparent',
          borderTopColor: theme.colors.accent,
          animation: 'spin 1s linear infinite',
          boxShadow: theme.shadows.glow,
          margin: '0 auto'
        }} />
        <p style={{
          color: 'white',
          marginTop: '24px',
          fontSize: '18px',
          fontWeight: '300',
          letterSpacing: '0.05em',
          textAlign: 'center',
          animation: 'fadeInOut 2s ease-in-out infinite',
          fontFamily: theme.fonts.secondary
        }}>
          Explorando el territorio...
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
