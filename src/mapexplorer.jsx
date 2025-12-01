import React, { useState, useRef, useEffect } from 'react';
import mapaImg1 from './assets/images/compressed/1-escala-caribe-pacifico.jpg';
import mapaImg2 from './assets/images/compressed/2-escala-acuatica.jpg';
import mapaImg3 from './assets/images/compressed/3-escala-circuito-memoria.jpg';
import mapaImg4 from './assets/images/compressed/4-escala-bellavista-nuevo.jpg';
import mapaImg5 from './assets/images/compressed/5-escala-bellavista-viejo.jpg';
import map1Audio from './assets/audio/map1-audio.mp3';
import map2Audio from './assets/audio/map2-audio.mp3';
import map3Audio from './assets/audio/map3-audio.mp3';
import map4Audio from './assets/audio/map4-audio.mp3';
import map5Audio from './assets/audio/map5-audio.mp3';
import { AudioPlayer } from './components/AudioPlayer';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { useResponsive } from './hooks/useResponsive';
import { theme } from './constants/theme';
import { categories } from './constants/categories';
import { hotspots } from './constants/hotspots';
import LeftPanel from './components/LeftPanel';
import MapControls from './components/MapControls';
import HotspotPopup from './components/HotspotPopup';
import Legend from './components/Legend';
import LoadingOverlay from './components/LoadingOverlay';
import MapContainer from './components/MapContainer';
import './responsive.css';

const MapExplorer = () => {
  // Responsive hook
  const { isMobile, isTablet, width } = useResponsive();
  
  // States for the interface
  const [isLoading, setIsLoading] = useState(true);
  const [showLeftPanel, setShowLeftPanel] = useState(!isMobile);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const [showBibliography, setShowBibliography] = useState(false);
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1.5); // Starting with more zoom
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  
  // Available maps
  const maps = [
    { id: 5, img: mapaImg5, name: "Bellavista Viejo", imgHD: mapaImg5 },
    { id: 1, img: mapaImg1, name: "Escala Caribe Pacífico", imgHD: mapaImg1 },
    { id: 2, img: mapaImg2, name: "Escala Acuática", imgHD: mapaImg2 },
    { id: 3, img: mapaImg3, name: "Circuito Memoria y Paisaje", imgHD: mapaImg3 },
    { id: 4, img: mapaImg4, name: "Bellavista Nuevo", imgHD: mapaImg4 }
  ];
  
  // Available audios - each map has its corresponding audio from its folder
  const audios = [
    {
      id: 5,
      title: "Bellavista Viejo",
      artist: "Máxima Asprilla",
      path: map5Audio
    },
    {
      id: 1,
      title: "Escala Caribe Pacífico",
      artist: "Baldoloino",
      path: map1Audio
    },
    {
      id: 2,
      title: "Escala Acuática", 
      artist: "Patrick Morales",
      path: map2Audio
    },
    {
      id: 3,
      title: "Circuito Memoria y Paisaje",
      artist: "Heydi Embera", 
      path: map3Audio
    },
    {
      id: 4,
      title: "Bellavista Nuevo",
      artist: "Comunidad",
      path: map4Audio
    }
  ];
  
  // Inicializar el reproductor de audio
  const audioPlayer = useAudioPlayer(audios, audios[0]);

  // Change audio when map changes (without auto-play)
  useEffect(() => {
    const correspondingAudio = audios[currentMapIndex]; // Direct index mapping
    console.log('Map index:', currentMapIndex, 'Audio:', correspondingAudio);
    
    if (correspondingAudio) {
      console.log('Switching to audio:', correspondingAudio.title);
      // Stop current audio if playing
      if (audioPlayer.isAudioPlaying) {
        audioPlayer.togglePlayPause();
      }
      // Change to corresponding audio without playing
      audioPlayer.changeAudio(correspondingAudio);
    }
    
    // Clear active category and hotspot when switching maps
    setActiveCategory(null);
    setActiveHotspot(null);
  }, [currentMapIndex]);
  
  // Handle responsive behavior
  useEffect(() => {
    // Auto-close panel on mobile, auto-open on desktop
    if (isMobile && showLeftPanel) {
      setShowLeftPanel(false);
    } else if (!isMobile && !isTablet && !showLeftPanel) {
      setShowLeftPanel(true);
    }
  }, [isMobile, isTablet]);
  
  // References
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  
  // Magnifier configuration
  const magnifierSize = 150;
  const magnification = 2;
  
  // Only show hotspots on the first map (Bellavista Viejo)
  const filteredHotspots = currentMapIndex === 0 ? hotspots : [];

  // Function to select a category and handle related actions
  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId === 'all' ? null : categoryId);
    
    // If selecting a category, find the first point of that category and navigate to it
    if (categoryId && categoryId !== 'all') {
      const firstPoint = hotspots.find(spot => spot.category === categoryId);
      if (firstPoint) {
        // Set the hotspot active and navigate to it (without zoom)
        setActiveHotspot(firstPoint.id);
        // Navigate to point without changing zoom level
        navigateToPoint(firstPoint.position.x, firstPoint.position.y);
      }
    } else {
      // If deselecting or selecting "all", close the active popup
      setActiveHotspot(null);
    }
  };

  // Initialize with zoomed in view and centered
  useEffect(() => {
    if (containerRef.current && mapRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      // Center point - Bojayá area
      const focusPoint = { x: 40, y: 65 };
      
      // Calculate image real size when loaded
      const img = new Image();
      img.onload = () => {
        setMapSize({
          width: img.width,
          height: img.height
        });
        
        // Ajustar para que la imagen esté alineada correctamente cuando el menú está abierto
        const menuWidth = isMobile ? 0 : 400; // Responsive menu width
        let initialX = 0;

        if (showLeftPanel && !isMobile) {
          // Si el panel está abierto y no es móvil, ajusta la posición para compensar
          initialX = menuWidth / 2;
        }
        
        // Set initial position with adjusted X and centered vertical position
        // Ajustamos el zoom inicial para que sea más cómodo navegar
        setPanPosition({ x: initialX, y: -200 }); // Movemos un poco hacia abajo para ver mejor la parte superior
        setZoomLevel(1.0); // Zoom más alejado para mejor navegación
      };
      img.src = maps[currentMapIndex].imgHD || maps[currentMapIndex].img;
    }
    
    // Set loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [showLeftPanel]); // Añadir showLeftPanel como dependencia

  // Note: Removed automatic panel adjustment to allow free horizontal movement

  // Zoom functionality disabled
  const handleZoomIn = () => {
    // Zoom functionality disabled
  };

  const handleZoomOut = () => {
    // Zoom functionality disabled
  };

  // Disable mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    // Zoom functionality disabled
  };
  
  // Function to navigate to a specific point without zooming
  const navigateToPoint = (x, y) => {
    if (containerRef.current && mapRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      // Calculate the center position of the container
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      
      // Calculate coordinates of the point in relation to the image (at scale 1)
      const pointX = (x / 100) * mapRef.current.offsetWidth;
      const pointY = (y / 100) * mapRef.current.offsetHeight;
      
      // Calculate the displacement needed to center the point
      const newPanX = centerX - pointX;
      const newPanY = centerY - pointY;
      
      // Smoothly animate the movement to the point
      setPanPosition({ x: newPanX, y: newPanY });
    }
  };

  // Function to zoom to a specific point (kept for legacy compatibility)
  const zoomToPoint = (x, y, level = 2) => {
    // Zoom disabled, just navigate to point
    navigateToPoint(x, y);
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) { // Only with left button
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y
      });
    }
  };

  const handleMouseMove = (e) => {
    // Immediate cursor tracking for magnifier even when dragging
    if (showMagnifier) {
      // Always update magnifier position with clientX/Y for exact cursor tracking
      setXY([e.clientX, e.clientY]);
      
      // Update size dimensions if needed
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        setSize([rect.width, rect.height]);
      }
    }
    
    // Handle map dragging independently from magnifier
    if (isDragging && containerRef.current && mapRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const mapRect = mapRef.current.getBoundingClientRect();
      
      // Calculate movement limits
      const maxX = containerRect.width;
      const minX = containerRect.width - (mapRect.width * zoomLevel);
      const maxY = containerRect.height;
      const minY = containerRect.height - (mapRect.height * zoomLevel);
      
      // New coordinates
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Allow both horizontal and vertical movement with padding
      const padding = 200; // Padding for better navigation
      setPanPosition({ 
        x: Math.min(Math.max(newX, minX - padding), maxX + padding),
        y: Math.min(Math.max(newY, minY - padding), maxY + padding)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handler for mouseenter (magnifier) - improves initial synchronization
  const handleMouseEnter = (e) => {
    if (showMagnifier && mapRef.current) {
      // Get dimensions
      const { width, height } = mapRef.current.getBoundingClientRect();
      setSize([width, height]);
      
      // Update cursor position immediately on enter
      setXY([e.clientX, e.clientY]);
    }
  };

  return (
    <div className="map-container" style={{ 
      fontFamily: theme.fonts.primary,
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      color: 'white',
      backgroundColor: '#000000',
      backgroundImage: 'linear-gradient(to bottom, #000000, #000000)',
      // Responsive adjustments
      minHeight: '100vh'
    }}>
      {/* Main map container */}
      <div 
        style={{
          width: '100%',
          height: `calc(100vh - ${audioPlayer.isAudioPlayerExpanded ? '300px' : '100px'})`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'height 0.5s ease'
        }}
      >
        <MapContainer
          containerRef={containerRef}
          mapRef={mapRef}
          maps={maps}
          currentMapIndex={currentMapIndex}
          isLoading={isLoading}
          zoomLevel={zoomLevel}
          panPosition={panPosition}
          filteredHotspots={filteredHotspots}
          categories={categories}
          activeHotspot={activeHotspot}
          setActiveHotspot={setActiveHotspot}
          isDragging={isDragging}
          showMagnifier={showMagnifier}
          magnifierSize={magnifierSize}
          magnification={magnification}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          x={x}
          y={y}
          showLeftPanel={showLeftPanel}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove}
          handleMouseUp={handleMouseUp}
          handleMouseEnter={handleMouseEnter}
          handleWheel={handleWheel}
        />
        
        <HotspotPopup 
          activeHotspot={activeHotspot} 
          setActiveHotspot={setActiveHotspot} 
          hotspots={hotspots}
          categories={categories}
          theme={theme}
        />
        
        <LeftPanel 
          showLeftPanel={showLeftPanel}
          setShowLeftPanel={setShowLeftPanel}
          categories={categories}
          activeCategory={activeCategory}
          selectCategory={selectCategory}
          maps={maps}
          currentMapIndex={currentMapIndex}
          setCurrentMapIndex={setCurrentMapIndex}
          theme={theme}
          setShowBibliography={setShowBibliography}
        />
        
        <MapControls 
          showLeftPanel={showLeftPanel}
          setShowLeftPanel={setShowLeftPanel}
          showMagnifier={showMagnifier}
          setShowMagnifier={setShowMagnifier}
          showLegend={showLegend}
          setShowLegend={setShowLegend}
          showBibliography={showBibliography}
          setShowBibliography={setShowBibliography}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          zoomToPoint={zoomToPoint}
          theme={theme}
        />

        <Legend 
          showLegend={showLegend}
          setShowLegend={setShowLegend}
          categories={categories}
          theme={theme}
        />

        <LoadingOverlay isLoading={isLoading} theme={theme} />
      </div>

      {/* Reproductor de Audio */}
      <AudioPlayer 
        audioPlayer={audioPlayer}
        theme={theme}
        audios={audios}
        containerRef={containerRef}
      />
    </div>
  );
};

export default MapExplorer;