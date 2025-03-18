import React from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';

/**
 * Componente de reproductor de audio con visualizador integrado
 */
export const AudioPlayer = ({
  audioPlayer,
  theme,
  audios,
  containerRef
}) => {
  const {
    // Estado
    currentAudio,
    isAudioPlaying,
    isMuted,
    volume,
    audioProgress,
    isAudioPlayerExpanded,
    useSyntheticWaves,
    currentTime,
    
    // Referencias
    audioRef,
    audioContextRef,
    analyserRef,
    
    // Acciones
    togglePlayPause,
    toggleMute,
    handleVolumeChange,
    changeAudio,
    formatTime,
    setIsAudioPlayerExpanded,
    initAudioContext
  } = audioPlayer;

  // Actualizar altura del contenedor cuando el reproductor cambia de tamaño
  React.useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.style.height = isAudioPlayerExpanded 
        ? 'calc(100vh - 300px)' 
        : 'calc(100vh - 100px)';
    }
  }, [isAudioPlayerExpanded, containerRef]);
  
  // Altura del reproductor según si está expandido o no
  const audioPlayerHeight = isAudioPlayerExpanded ? '300px' : '100px';

  // Manejar clic en el visualizador para buscar posición en el audio
  const handleVisualizerClick = (event) => {
    if (audioRef.current && audioRef.current.duration) {
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = offsetX / rect.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      height: audioPlayerHeight,
      backgroundColor: 'rgba(17, 24, 39, 0.9)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.2)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'height 500ms ease',
      overflow: 'hidden',
      zIndex: 60
    }}>
      {/* Barra de progreso superior */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'rgba(75, 85, 99, 0.5)',
        overflow: 'hidden',
        zIndex: 2
      }}>
        <div
          style={{
            height: '100%',
            width: `${audioProgress}%`,
            background: `linear-gradient(to right, ${theme.colors.accent}, #F59E0B)`,
            transition: 'width 0.1s linear'
          }}
        />
      </div>
      
      <div style={{
        padding: '16px 32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Reproductor integrado con visualizador */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100px',
          position: 'relative'
        }}>
          {/* Controles y título a la izquierda */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            width: '300px',
            flexShrink: 0,
            zIndex: 4
          }}>
            <button
              onClick={() => {
                // Intenta inicializar el contexto de audio y reproducir
                if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                  audioContextRef.current.resume().catch(e => console.log("Error resumiendo contexto:", e));
                } else if (!audioContextRef.current) {
                  initAudioContext();
                }
                togglePlayPause();
              }}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.8), rgba(31, 41, 55, 1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.accent,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 150ms ease',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 5
              }}
            >
              {isAudioPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            <div style={{ zIndex: 5 }}>
              <h3 style={{
                color: 'white',
                fontWeight: 600,
                margin: 0,
                fontSize: '16px',
                letterSpacing: '0.01em',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}>
                {currentAudio.title}
              </h3>
              <p style={{
                color: '#9CA3AF',
                margin: '4px 0 0 0',
                fontSize: '14px',
                letterSpacing: '0.01em'
              }}>
                {currentAudio.artist}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '4px'
              }}>
                {formatTime(currentTime)} / {audioRef.current && audioRef.current.duration ? 
                  formatTime(audioRef.current.duration) : '0:00'}
              </div>
            </div>
          </div>
          
          {/* Visualizador de onda integrado en el medio */}
          <div style={{
            flex: 1,
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}>
            {/* Contenedor del visualizador */}
            <div style={{
              position: 'absolute',
              inset: '10px 10px 10px 0',
              background: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <AudioVisualizer 
                audioRef={audioRef}
                audioContextRef={audioContextRef}
                analyserRef={analyserRef}
                isAudioPlaying={isAudioPlaying}
                useSyntheticWaves={useSyntheticWaves}
                audioProgress={audioProgress}
                onClick={handleVisualizerClick}
                theme={theme}
              />
            </div>
          </div>
          
          {/* Controles de volumen y expansión a la derecha */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '0 8px',
            width: '180px',
            flexShrink: 0,
            zIndex: 4
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <button
                onClick={toggleMute}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '8px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  color: '#D1D5DB',
                  transition: 'color 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  width: '80px',
                  accentColor: theme.colors.accent
                }}
              />
            </div>
            <button
              onClick={() => setIsAudioPlayerExpanded(!isAudioPlayerExpanded)}
              style={{
                background: 'transparent',
                border: 'none',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                color: '#D1D5DB',
                transition: 'color 150ms ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isAudioPlayerExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </button>
          </div>
        </div>
        
        {/* Lista de audios expandible */}
        {isAudioPlayerExpanded && (
          <div style={{
            flex: 1,
            overflowY: 'auto',
            paddingTop: '8px',
            maxHeight: '220px'
          }}>
            <p style={{
              color: '#9CA3AF',
              fontSize: '14px',
              marginBottom: '16px'
            }}>
              Escucha los relatos y testimonios sobre la memoria viva del territorio de Bojayá.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '12px',
              marginTop: '16px'
            }}>
              {audios.map(audio => (
                <button 
                  key={audio.id}
                  onClick={() => changeAudio(audio)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '12px',
                    background: currentAudio.id === audio.id 
                      ? 'rgba(55, 65, 81, 0.9)'
                      : 'rgba(31, 41, 55, 0.5)',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    border: currentAudio.id === audio.id
                      ? `1px solid ${theme.colors.accent}33`
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    borderLeft: currentAudio.id === audio.id
                      ? `4px solid ${theme.colors.accent}`
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(75, 85, 99, 0.8), rgba(55, 65, 81, 1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {currentAudio.id === audio.id && isAudioPlaying 
                      ? <Pause size={16} style={{ color: theme.colors.accent }} /> 
                      : <Play size={16} style={{ color: '#D1D5DB' }} />}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 500,
                      margin: 0,
                      letterSpacing: '0.01em'
                    }}>{audio.title}</h4>
                    <p style={{
                      color: '#9CA3AF',
                      fontSize: '12px',
                      margin: '4px 0 0 0',
                      letterSpacing: '0.01em'
                    }}>{audio.artist}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Elemento de audio oculto */}
      <audio 
        ref={audioRef} 
        src={currentAudio.path} 
        onLoadedMetadata={() => {
          // Inicializar visualizador cuando se carga el audio
          initAudioContext();
        }}
        onClick={() => {
          // Inicializar audio con clic en caso de políticas estrictas del navegador
          if (!isAudioPlaying) {
            initAudioContext();
            togglePlayPause();
          } else {
            audioRef.current.pause();
            setIsAudioPlayerExpanded(false);
          }
        }}
        onPlay={() => {
          // Intentar inicializar el contexto de audio en reproducción
          initAudioContext();
        }}
        onEnded={() => {
          isAudioPlaying(false);
        }}
        preload="auto"
      />
    </div>
  );
};