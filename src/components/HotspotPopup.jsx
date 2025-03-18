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
      position: 'fixed', // Changed from absolute to fixed for better positioning
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 30,
      width: '450px',
      maxWidth: '95vw',
      maxHeight: '80vh',
      overflowY: 'auto',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      boxShadow: theme.shadows.xl,
      overflow: 'hidden',
      transition: 'all 300ms ease',
      animation: 'fadeIn 0.5s ease-out',
      fontFamily: theme.fonts.primary
    }}>
      <div style={{ 
        borderLeft: `5px solid ${category?.color || theme.colors.accent}`,
        padding: '28px 24px'
      }}>
        <div style={{ position: 'relative' }}>
          {/* Category tag */}
          <div style={{
            position: 'absolute',
            top: '-48px',
            left: '-28px',
            backgroundColor: category?.color || theme.colors.accent,
            color: '#111827',
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
              color="#111827" 
              size={14} 
            />
            {category?.name || 'General'}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ 
              color: '#111827', 
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
                color: '#6B7280',
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
            color: '#4B5563', 
            marginTop: '12px', 
            marginBottom: '20px', 
            lineHeight: '1.6',
            fontSize: '15px' 
          }}>
            {hotspot.description}
          </p>
          
          {/* Details section */}
          <div style={{ 
            marginTop: '24px',
            borderTop: '1px solid #E5E7EB',
            paddingTop: '20px'
          }}>
            <h3 style={{ 
              color: '#111827', 
              fontSize: '16px', 
              fontWeight: '600',
              marginTop: 0,
              marginBottom: '16px' 
            }}>
              Detalles
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {hotspot.details.map((detail, index) => (
                <div key={index} style={{ marginBottom: '4px' }}>
                  <h4 style={{ 
                    color: '#111827', 
                    margin: '0 0 4px 0', 
                    fontSize: '14px', 
                    fontWeight: '600' 
                  }}>
                    {detail.title}
                  </h4>
                  <p style={{ 
                    color: '#4B5563', 
                    margin: 0, 
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotspotPopup;
