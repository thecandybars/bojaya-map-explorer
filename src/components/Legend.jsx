import React from 'react';
import { X } from 'lucide-react';
import { CategoryIcon } from '../categoryicon';

const Legend = ({ showLegend, setShowLegend, categories, theme }) => {
  if (!showLegend) return null;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '24px', 
      right: '96px', 
      width: '320px', 
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      boxShadow: theme.shadows.xl,
      zIndex: 40,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      fontFamily: theme.fonts.primary
    }}>
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: theme.colors.accent,
            margin: 0
          }}>
            Convenciones del Mapa
          </h3>
          <button 
            onClick={() => setShowLegend(false)}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#9CA3AF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>
        <div style={{ 
          maxHeight: '400px', 
          overflowY: 'auto', 
          paddingRight: '8px' 
        }}>
          {categories.filter(cat => cat.id !== 'all').map(category => (
            <div 
              key={category.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                color: '#D1D5DB', 
                padding: '10px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CategoryIcon 
                  category={category.id} 
                  color={category.color} 
                  size={18} 
                />
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '2px'
              }}>
                <span style={{ 
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'white'
                }}>{category.name}</span>
                <span style={{ 
                  fontSize: '12px',
                  color: '#9CA3AF'
                }}>{category.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legend;
