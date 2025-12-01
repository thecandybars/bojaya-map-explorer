import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { CategoryIcon } from '../categoryicon';

// Category display names for buttons (matching popup names)
const categoryDisplayNames = {
  'memoria': 'ESCUELA',
  'conmemorativo': 'IGLESIA',
  'rituales': 'SENDERO',
  'encuentros': 'TAMBOS',
  'fortalecimiento': 'ANTIGUO CENTRO DE SALUD',
  'promocion': 'PALACIO MUNICIPAL',
  'museologia': 'CASA AGUSTINAS',
  'articulacion': 'CANCHA Y SUS GRADAS'
};

const LeftPanel = ({ 
  showLeftPanel, 
  setShowLeftPanel, 
  categories, 
  activeCategory, 
  selectCategory, 
  maps, 
  currentMapIndex, 
  setCurrentMapIndex, 
  theme, 
  setShowBibliography 
}) => {
  return (
    <div 
      style={{
        position: 'absolute',
        left: showLeftPanel ? 0 : '-100%',
        top: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 20,
        transition: 'left 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '10px 0 30px rgba(0, 0, 0, 0.1)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'auto',
        // Responsive adjustments
        '@media (max-width: 768px)': {
          width: '100vw',
          maxWidth: 'none',
          padding: '12px'
        }
      }}
    >
      <div style={{ position: 'relative' }}>
        <h1 
          style={{ 
            color: theme.colors.accent, 
            fontSize: window.innerWidth <= 768 ? '18px' : '20px', 
            marginTop: '10px',
            marginBottom: window.innerWidth <= 768 ? '16px' : '24px',
            fontWeight: '700',
            letterSpacing: '0.01em',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}
        >
          Plan Vivo de Memoria de Bojayá
        </h1>
        
        <button
          onClick={() => setShowLeftPanel(false)}
          style={{
            position: 'absolute',
            top: '8px',
            right: '0',
            background: 'transparent',
            border: 'none',
            color: '#9CA3AF',
            cursor: 'pointer',
            padding: '8px',
            transition: 'color 150ms ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      
      {/* Map selector */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: '16px', 
          marginBottom: '16px',
          fontWeight: '600',
          color: '#E5E7EB'
        }}>
          Seleccionar mapa
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {maps.map((map, index) => (
            <button
              key={map.id}
              onClick={() => setCurrentMapIndex(index)}
              style={{
                background: currentMapIndex === index 
                  ? 'rgba(0, 0, 0, 0.8)' 
                  : 'rgba(0, 0, 0, 0.5)',
                border: currentMapIndex === index 
                  ? `1px solid ${theme.colors.accent}33`
                  : '1px solid rgba(255, 255, 255, 0.05)',
                borderLeft: currentMapIndex === index
                  ? `4px solid ${theme.colors.accent}`
                  : '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 150ms ease'
              }}
            >
              <span style={{ 
                color: 'white', 
                fontWeight: currentMapIndex === index ? '600' : '500',
                fontSize: '14px'
              }}>
                {map.name}
              </span>
              {currentMapIndex === index && (
                <div 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: theme.colors.accent
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Categories - Only show for first map (Bellavista Viejo) */}
      {currentMapIndex === 0 && (
        <div>
          <h2 style={{ 
            fontSize: '16px', 
            marginBottom: '16px',
            fontWeight: '600',
            color: '#E5E7EB'
          }}>
            Categorías
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => selectCategory(category.id)}
                style={{
                  background: activeCategory === category.id 
                    ? 'rgba(0, 0, 0, 0.8)' 
                    : 'rgba(0, 0, 0, 0.5)',
                  border: activeCategory === category.id 
                    ? `1px solid ${category.color}33`
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  borderLeft: activeCategory === category.id
                    ? `4px solid ${category.color}`
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 150ms ease'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: activeCategory === category.id ? category.color : 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 150ms ease'
                }}>
                  <CategoryIcon 
                    category={category.id} 
                    color={activeCategory === category.id ? 'white' : category.color} 
                    size={16} 
                  />
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  <span style={{ 
                    color: 'white', 
                    fontWeight: activeCategory === category.id ? '600' : '500',
                    fontSize: '14px'
                  }}>
                    {categoryDisplayNames[category.id] || category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Bibliography button */}
      <button
        onClick={() => setShowBibliography(prev => !prev)}
        style={{
          marginTop: 'auto',
          padding: '12px 16px',
          background: 'rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 150ms ease'
        }}
      >
        <svg 
xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme.colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
        <span>Referencias bibliográficas</span>
      </button>
    </div>
  );
};

export default LeftPanel;
