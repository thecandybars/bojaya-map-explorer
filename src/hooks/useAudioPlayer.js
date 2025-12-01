import { useState, useRef, useEffect } from 'react';

/**
 * Hook para manejar la reproducción de audio y su estado
 * @param {Array} audios - Lista de audios disponibles
 * @param {Object} initialAudio - Audio inicial a reproducir
 * @returns {Object} - Estado y controles del reproductor de audio
 */
export const useAudioPlayer = (audios, initialAudio) => {
  // Estados para el reproductor
  const [currentAudio, setCurrentAudio] = useState(initialAudio || audios[0]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(false);
  
  // Referencias para elementos de audio
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const audioSourceRef = useRef(null);
  const analyserRef = useRef(null);
  
  // Flag para saber si el usuario ha interactuado con la página
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Estado para determinar si se debe mostrar ondas sintéticas
  const [useSyntheticWaves, setUseSyntheticWaves] = useState(true);

  // Efecto para configurar eventos de interacción con la página
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        initAudioContext();
      }
    };
    
    // Añadir eventos para detectar interacción del usuario
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasUserInteracted]);

  // Efecto para tracking de progreso de audio
  useEffect(() => {
    if (audioRef.current) {
      // Función para actualizar progreso y tiempo actual
      const updateProgress = () => {
        if (audioRef.current.duration) {
          const current = audioRef.current.currentTime;
          setAudioProgress((current / audioRef.current.duration) * 100);
          setCurrentTime(current);
        }
      };
      
      const audioElement = audioRef.current;
      audioElement.addEventListener('timeupdate', updateProgress);
      audioElement.addEventListener('loadedmetadata', updateProgress);
      audioElement.addEventListener('seeking', updateProgress);
      
      return () => {
        audioElement.removeEventListener('timeupdate', updateProgress);
        audioElement.removeEventListener('loadedmetadata', updateProgress);
        audioElement.removeEventListener('seeking', updateProgress);
        
        // Limpiar recursos
        if (audioSourceRef.current) {
          try {
            audioSourceRef.current.disconnect();
          } catch (e) {
            console.log("Error desconectando fuente de audio:", e);
          }
        }
        
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
          try {
            audioContextRef.current.close();
          } catch (err) {
            console.error('Error al cerrar el contexto de audio:', err);
          }
        }
      };
    }
  }, []);

  // Función para inicializar el contexto de audio de forma segura
  const initAudioContext = () => {
    // Ya está inicializado, solo activar si está suspendido
    if (hasUserInteracted && audioContextRef.current) {
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(err => {
          console.log("Error reactivando contexto de audio:", err);
          setUseSyntheticWaves(true);
        });
      }
      return;
    }
    
    try {
      if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
        
        // Configurar el analizador
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 1024;
        
        // Verificar si el elemento audio ya está conectado a un nodo fuente
        if (!audioSourceRef.current && audioRef.current) {
          try {
            audioSourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
            audioSourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
          } catch (connectionError) {
            console.log("Elemento de audio ya conectado, tratando de reutilizar conexión");
            setUseSyntheticWaves(true);
          }
        }
        
        setHasUserInteracted(true);
        
        // Solo desactivamos las ondas sintéticas si logramos conectar la fuente de audio
        if (audioSourceRef.current) {
          setUseSyntheticWaves(false);
        }
      }
    } catch (err) {
      console.log("Error inicializando contexto de audio:", err);
      setUseSyntheticWaves(true);
    }
  };

  // Función para alternar reproducción/pausa
  const togglePlayPause = () => {
    initAudioContext();
    
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setUseSyntheticWaves(true);
        setIsAudioPlaying(false);
      } else {
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        
        audioRef.current.play()
          .then(() => {
            setIsAudioPlaying(true);
            if (audioContextRef.current && 
                audioContextRef.current.state === 'running' && 
                analyserRef.current) {
              setUseSyntheticWaves(false);
            }
          })
          .catch(err => {
            console.error("Error reproduciendo audio:", err);
            setUseSyntheticWaves(true);
            
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
              audioContextRef.current.resume()
                .then(() => {
                  audioRef.current.play()
                    .then(() => {
                      setIsAudioPlaying(true);
                      setUseSyntheticWaves(false);
                    })
                    .catch(e => console.log("No se pudo reproducir el audio después de reanudar:", e));
                })
                .catch(e => {
                  console.log("No se pudo reanudar el contexto de audio:", e);
                });
            }
          });
      }
    }
  };

  // Función para silenciar/desilenciar
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Manejador de cambio de volumen
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Función para cambiar el audio actual
  const changeAudio = (audio) => {
    setUseSyntheticWaves(true);
    setCurrentAudio(audio);
    
    const wasPlaying = isAudioPlaying;
    if (wasPlaying) {
      setIsAudioPlaying(false);
    }
    
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.src = audio.path;
        audioRef.current.load();
        
        if (wasPlaying) {
          audioRef.current.play()
            .then(() => {
              setIsAudioPlaying(true);
              if (hasUserInteracted && audioSourceRef.current) {
                setUseSyntheticWaves(false);
              }
            })
            .catch(err => {
              console.error("Error al reproducir audio:", err);
              setIsAudioPlaying(false);
            });
        }
      }
    }, 50);
  };

  // Función para formatear el tiempo en formato mm:ss
  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds) return '0:00';
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Función para buscar una posición en el audio
  const seekAudio = (percentage) => {
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return {
    // Estado
    currentAudio,
    isAudioPlaying,
    isMuted,
    volume,
    currentTime,
    audioProgress,
    isAudioPlayerExpanded,
    hasUserInteracted,
    useSyntheticWaves,
    
    // Referencias
    audioRef,
    audioContextRef,
    analyserRef,
    audioSourceRef,
    
    // Acciones
    togglePlayPause,
    toggleMute,
    handleVolumeChange,
    changeAudio,
    formatTime,
    seekAudio,
    setIsAudioPlayerExpanded,
    initAudioContext,
    setUseSyntheticWaves
  };
};