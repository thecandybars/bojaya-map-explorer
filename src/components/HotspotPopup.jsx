import React from 'react';
import { X } from 'lucide-react';
import { CategoryIcon } from '../categoryicon';

const HotspotPopup = ({ activeHotspot, setActiveHotspot, hotspots, categories, theme }) => {
  if (!activeHotspot) return null;
  
  const hotspot = hotspots.find(h => h.id === activeHotspot);
  if (!hotspot) return null;
  
  const category = categories.find(c => c.id === hotspot.category);
  
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 30,
      width: window.innerWidth <= 768 ? '95vw' : '450px',
      maxWidth: '95vw',
      maxHeight: '80vh',
      overflowY: 'auto',
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(16px)',
      borderRadius: window.innerWidth <= 768 ? '12px' : '16px',
      boxShadow: theme.shadows.xl,
      overflow: 'hidden',
      transition: 'all 300ms ease',
      animation: 'fadeIn 0.5s ease-out',
      fontFamily: theme.fonts.primary,
      color: 'white'
    }}>
      <div style={{ 
        borderLeft: `5px solid ${category ? category.color : theme.colors.accent}`,
        padding: window.innerWidth <= 768 ? '20px 16px' : '28px 24px'
      }}>
        <div style={{ position: 'relative' }}>
          {/* Category tag */}
          <div style={{
            position: 'absolute',
            top: '-48px',
            left: '-28px',
            backgroundColor: category ? category.color : theme.colors.accent,
            color: 'white',
            padding: '8px 16px',
            borderRadius: '0 9999px 9999px 0',
            fontSize: '12px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {/* Add category icon */}
            <CategoryIcon 
              category={hotspot.category} 
              color="white" 
              size={14} 
            />
            {category?.name || 'General'}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ 
              color: category ? category.color : theme.colors.accent, 
              margin: 0, 
              fontSize: '24px', 
              fontWeight: '700',
              flex: '1'
            }}>
              {hotspot.name}
            </h2>
            <button 
              onClick={() => setActiveHotspot(null)}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '4px',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                marginTop: '-8px',
                marginRight: '-8px',
                transition: 'background-color 200ms ease'
              }}
            >
              <X size={20} />
            </button>
          </div>
          
          <p style={{ 
            color: 'white', 
            marginTop: '12px', 
            marginBottom: '20px', 
            lineHeight: '1.6',
            fontSize: '15px' 
          }}>
            {hotspot.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotspotPopup;
