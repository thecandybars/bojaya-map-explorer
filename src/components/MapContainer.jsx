import React from 'react';
import { CategoryIcon } from '../categoryicon';

const MapContainer = ({
  containerRef,
  mapRef,
  maps,
  currentMapIndex,
  isLoading,
  zoomLevel,
  panPosition,
  filteredHotspots,
  categories,
  activeHotspot,
  setActiveHotspot,
  isDragging,
  showMagnifier,
  magnifierSize,
  magnification,
  imgWidth,
  imgHeight,
  x,
  y,
  showLeftPanel,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleMouseEnter
}) => {
  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'height 0.5s ease'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseEnter={handleMouseEnter}
    >
      {/* Map with zoom and pan */}
      <div 
        className="zoom-transition"
        style={{ 
          position: 'absolute',
          transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
          transformOrigin: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <img
          ref={mapRef}
          src={maps[currentMapIndex].imgHD || maps[currentMapIndex].img} /* Usar imagen HD si está disponible */
          alt={`${maps[currentMapIndex].name} - Plan Vivo de Memoria y Paisaje de Bojayá`}
          style={{ 
            minWidth: '800px', 
            minHeight: '600px',
            maxWidth: 'none',
            transition: 'opacity 0.7s ease',
            opacity: isLoading ? 0 : 1,
            userDrag: 'none',
            WebkitUserDrag: 'none'
          }}
        />
        
        {/* Puntos de interés (hotspots) */}
        {filteredHotspots.map(spot => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
            style={{
              position: 'absolute',
              left: `${spot.position.x}%`,
              top: `${spot.position.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: categories.find(c => c.id === spot.category)?.color || '#E9A668',
              border: `2px solid rgba(255, 255, 255, ${activeHotspot === spot.id ? '1' : '0.9'})`,
              boxShadow: activeHotspot === spot.id 
                ? '0 0 15px rgba(233, 166, 104, 0.5)' 
                : '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 300ms ease',
              scale: activeHotspot === spot.id ? '1.2' : '1',
              opacity: showLeftPanel ? 1 : 0.8,
              animation: activeHotspot === spot.id 
                ? 'none' 
                : 'gentlePulse 2s infinite'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(233, 166, 104, 0.4)';
            }}
            onMouseOut={(e) => {
              if (activeHotspot !== spot.id) {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              } else {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)';
              }
            }}
            title={spot.name}
          >
            <CategoryIcon 
              category={spot.category} 
              color="white" 
              size={14} 
            />
          </button>
        ))}
      </div>
      
      {/* Magnifier lens with improved cursor tracking */}
      {showMagnifier && (
        <div
          className="magnifier"
          style={{
            position: 'fixed', // Use fixed position to follow the cursor exactly
            left: `${x}px`,
            top: `${y}px`,
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            border: '2px solid white',
            borderRadius: '50%',
            pointerEvents: 'none',
            cursor: 'none',
            backgroundImage: `url(${maps[currentMapIndex].imgHD || maps[currentMapIndex].img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgWidth * magnification}px ${imgHeight * magnification}px`,
            // Calculate the background position to match the zoomed view
            backgroundPosition: `${-(x - containerRef.current?.getBoundingClientRect().left - panPosition.x) * magnification + magnifierSize / 2}px ${-(y - containerRef.current?.getBoundingClientRect().top - panPosition.y) * magnification + magnifierSize / 2}px`,
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(233, 166, 104, 0.3)',
            zIndex: 40,
            transform: 'translate(-50%, -50%)',
            transition: 'none' // Remove transition for instant tracking
          }}
        />
      )}
    </div>
  );
};

export default MapContainer;
