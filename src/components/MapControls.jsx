import React from 'react';
import { ChevronRight, Search, Plus, Minus, Compass, Info, Layers } from 'lucide-react';

const MapControls = ({ 
  showLeftPanel, 
  setShowLeftPanel,
  showMagnifier, 
  setShowMagnifier,
  showLegend,
  setShowLegend,
  showBibliography,
  setShowBibliography,
  handleZoomIn,
  handleZoomOut,
  zoomToPoint,
  theme
}) => {
  return (
    <>
      {/* Right control panel */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 20
      }}>
        {/* Toggle left panel button */}
        {!showLeftPanel && (
          <button 
            onClick={() => setShowLeftPanel(true)}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: theme.shadows.md,
              transition: 'all 150ms ease'
            }}
            title="Menú"
          >
            <ChevronRight size={20} />
          </button>
        )}
        
        {/* Magnifier button */}
        <button 
          onClick={() => setShowMagnifier(!showMagnifier)}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: showMagnifier ? 'rgba(31, 41, 55, 0.8)' : 'rgba(31, 41, 55, 0.6)',
            color: showMagnifier ? '#E9A668' : 'white',
            border: showMagnifier ? `1px solid ${theme.colors.accent}33` : 'none',
            cursor: 'pointer',
            boxShadow: showMagnifier ? `${theme.shadows.md}, 0 0 15px rgba(233, 166, 104, 0.2)` : theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Lupa"
        >
          <Search size={20} />
        </button>
        
        {/* Map legend button */}
        <button 
          onClick={() => setShowLegend(!showLegend)}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: showLegend ? 'rgba(31, 41, 55, 0.8)' : 'rgba(31, 41, 55, 0.6)',
            color: showLegend ? '#E9A668' : 'white',
            border: showLegend ? `1px solid ${theme.colors.accent}33` : 'none',
            cursor: 'pointer',
            boxShadow: showLegend ? `${theme.shadows.md}, 0 0 15px rgba(233, 166, 104, 0.2)` : theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Convenciones"
        >
          <Layers size={20} />
        </button>
        
        {/* Information button */}
        <button 
          onClick={() => setShowBibliography(!showBibliography)}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: showBibliography ? 'rgba(31, 41, 55, 0.8)' : 'rgba(31, 41, 55, 0.6)',
            color: showBibliography ? '#E9A668' : 'white',
            border: showBibliography ? `1px solid ${theme.colors.accent}33` : 'none',
            cursor: 'pointer',
            boxShadow: showBibliography ? `${theme.shadows.md}, 0 0 15px rgba(233, 166, 104, 0.2)` : theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Información"
        >
          <Info size={20} />
        </button>
      </div>
      
      {/* Zoom controls */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 20
      }}>
        <button 
          onClick={handleZoomIn}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
            e.currentTarget.style.color = '#E9A668';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
            e.currentTarget.style.color = 'white';
          }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Acercar"
        >
          <Plus size={20} />
        </button>
        
        <button 
          onClick={handleZoomOut}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
            e.currentTarget.style.color = '#E9A668';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
            e.currentTarget.style.color = 'white';
          }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Alejar"
        >
          <Minus size={20} />
        </button>
        
        <button 
          onClick={() => zoomToPoint(40, 65, 1.5)}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
            e.currentTarget.style.color = '#E9A668';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
            e.currentTarget.style.color = 'white';
          }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: theme.shadows.md,
            transition: 'all 150ms ease'
          }}
          title="Centrar mapa"
        >
          <Compass size={20} />
        </button>
      </div>
    </>
  );
};

export default MapControls;
