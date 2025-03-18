import React, { useRef, useEffect } from 'react';

/**
 * Componente visualizador de audio que muestra ondas de sonido en tiempo real o sintéticas
 */
export const AudioVisualizer = ({
  audioRef,
  audioContextRef,
  analyserRef,
  isAudioPlaying,
  useSyntheticWaves,
  audioProgress,
  onClick,
  theme,
  height = 80,
  width = 1400
}) => {
  // Referencia al canvas para dibujar
  const canvasRef = useRef(null);
  // Referencia para el frame de animación
  const animationRef = useRef(null);

  // Efecto para inicializar y gestionar el visualizador
  useEffect(() => {
    // Inicializar visualizador cuando el componente se monta
    setupVisualizer();
    
    // Limpiar cuando el componente se desmonta
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAudioPlaying, useSyntheticWaves, audioContextRef.current, analyserRef.current]);

  // Configura el visualizador
  const setupVisualizer = () => {
    if (!canvasRef.current) return;
    
    // Cancelar cualquier animación anterior
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Iniciar la visualización
    renderVisualizer();
  };

  // Renderiza el visualizador frame a frame
  const renderVisualizer = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    
    // Limpiar el canvas
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Arrays para datos de tiempo y frecuencia
    let timeDataArray, freqDataArray, bufferLength;
    
    // Si estamos usando ondas sintéticas o no hay analizador disponible
    if (useSyntheticWaves || !analyserRef.current || !audioContextRef.current) {
      // Crear datos sintéticos
      const fftSize = 512;
      bufferLength = fftSize / 2;
      timeDataArray = new Uint8Array(fftSize);
      freqDataArray = new Uint8Array(bufferLength);
      
      // Generar datos sintéticos
      for (let i = 0; i < timeDataArray.length; i++) {
        const time = Date.now() / 1000;
        const baseY = 128;
        
        // Intensidad variable según si está reproduciendo o no
        const intensity = isAudioPlaying ? 1.0 : 0.7;
        
        // Ondas sinusoidales combinadas con diferentes frecuencias y amplitudes
        const wave1 = Math.sin(i * 0.03 + time * 0.8) * 3 * intensity;
        const wave2 = Math.sin(i * 0.02 + time * 0.5) * 2 * intensity;
        const wave3 = Math.sin(i * 0.01 + time * 1.2) * 1 * intensity;
        
        // Añadir un pequeño temblor aleatorio para mayor naturalidad
        const jitter = isAudioPlaying ? (Math.random() - 0.5) * 2 : 0;
        
        // Combinamos las ondas para un movimiento suave y natural
        timeDataArray[i] = baseY + wave1 + wave2 + wave3 + jitter;
        
        // Crear datos de frecuencia sintéticos para las barras inferiores
        if (i < bufferLength) {
          const freqWave = Math.sin(i * 0.1 + time * 1.5);
          const baseValue = 20 + Math.sin(time * 0.8 + i * 0.1) * 15 * intensity; 
          const pulse = isAudioPlaying ? Math.sin(time * 4) * 10 : 0;
          freqDataArray[i] = baseValue + Math.abs(freqWave) * 20 * intensity + pulse;
        }
      }
    } else if (!useSyntheticWaves && audioContextRef.current && analyserRef.current) {
      // Usar datos reales de audio si están disponibles
      try {
        // Configurar analizador
        analyserRef.current.fftSize = 512;
        bufferLength = analyserRef.current.frequencyBinCount;
        
        // Crear arrays para datos
        timeDataArray = new Uint8Array(analyserRef.current.fftSize);
        freqDataArray = new Uint8Array(bufferLength);
        
        // Obtener datos reales
        analyserRef.current.getByteTimeDomainData(timeDataArray);
        analyserRef.current.getByteFrequencyData(freqDataArray);
        
        // Verificar si hay señal de audio activa
        let isAudioActive = false;
        for (let i = 0; i < timeDataArray.length; i++) {
          if (Math.abs(timeDataArray[i] - 128) > 5) {
            isAudioActive = true;
            break;
          }
        }
        
        // Si no hay actividad de audio pero está reproduciendo, generar datos sintéticos
        if (!isAudioActive && isAudioPlaying) {
          for (let i = 0; i < timeDataArray.length; i++) {
            const time = Date.now() / 1000;
            const baseY = 128;
            
            const intensity = 0.7;
            const wave1 = Math.sin(i * 0.03 + time * 0.8) * 3 * intensity;
            const wave2 = Math.sin(i * 0.02 + time * 0.5) * 2 * intensity;
            const wave3 = Math.sin(i * 0.01 + time * 1.2) * 1 * intensity;
            
            timeDataArray[i] = baseY + wave1 + wave2 + wave3;
            
            if (i < bufferLength) {
              const freqWave = Math.sin(i * 0.1 + time * 1.5);
              const baseValue = 30 + Math.sin(time + i * 0.1) * 20 * intensity;
              freqDataArray[i] = baseValue + Math.abs(freqWave) * 20 * intensity;
            }
          }
        }
      } catch (err) {
        // Fallback a ondas sintéticas en caso de error
        console.log("Fallback a ondas sintéticas:", err);
        
        // Crear datos sintéticos
        const fftSize = 512;
        bufferLength = fftSize / 2;
        timeDataArray = new Uint8Array(fftSize);
        freqDataArray = new Uint8Array(bufferLength);
        
        // Generar datos básicos
        for (let i = 0; i < timeDataArray.length; i++) {
          const time = Date.now() / 1000;
          const baseY = 128;
          
          const intensity = isAudioPlaying ? 1.0 : 0.5;
          const wave1 = Math.sin(i * 0.03 + time * 0.8) * 3 * intensity;
          const wave2 = Math.sin(i * 0.02 + time * 0.5) * 2 * intensity;
          
          timeDataArray[i] = baseY + wave1 + wave2;
          
          if (i < bufferLength) {
            freqDataArray[i] = 30 + Math.abs(Math.sin(i * 0.1 + time)) * 20 * intensity;
          }
        }
      }
    } else {
      // Caso de fallback final
      const fftSize = 512;
      bufferLength = fftSize / 2;
      timeDataArray = new Uint8Array(fftSize);
      freqDataArray = new Uint8Array(bufferLength);
      
      // Generar ondas muy básicas
      for (let i = 0; i < timeDataArray.length; i++) {
        const time = Date.now() / 1000;
        timeDataArray[i] = 128 + Math.sin(i * 0.05 + time) * 1.5;
        
        if (i < bufferLength) {
          freqDataArray[i] = 10 + Math.abs(Math.sin(i * 0.1 + time)) * 10;
        }
      }
    }
    
    // ===== DIBUJO DEL VISUALIZADOR =====

    // Línea central
    canvasCtx.beginPath();
    canvasCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    canvasCtx.moveTo(0, canvas.height/2);
    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
    
    // Gradiente para la forma de onda
    const waveGradient = canvasCtx.createLinearGradient(0, 0, canvas.width, 0);
    waveGradient.addColorStop(0, '#426D5A');
    waveGradient.addColorStop(0.5, theme.colors.accent);
    waveGradient.addColorStop(1, '#E9A668');
    
    // Configurar estilo para la forma de onda
    canvasCtx.lineWidth = 2.5;
    canvasCtx.strokeStyle = waveGradient;
    canvasCtx.shadowColor = theme.colors.accent;
    canvasCtx.shadowBlur = 15;
    canvasCtx.shadowOffsetX = 0;
    canvasCtx.shadowOffsetY = 0;
    
    // Dibujar forma de onda principal
    canvasCtx.beginPath();
    const sliceWidth = canvas.width / timeDataArray.length;
    let x = 0;
    
    // Determinar el factor de suavidad
    const isAudioActive = !useSyntheticWaves && 
                          isAudioPlaying && 
                          timeDataArray.some(val => Math.abs(val - 128) > 5);
    
    for (let i = 0; i < timeDataArray.length; i++) {
      // Calcular amplitud normalizada
      const v = timeDataArray[i] / 128.0;
      
      // Aplicar suavizado
      const smoothness = useSyntheticWaves ? 0.9 : (isAudioActive ? 0.8 : 0.9);
      const y = (v * canvas.height / 2 * smoothness) + (canvas.height / 2 * (1 - smoothness));
      
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        // Usar curvas Bezier para una forma más suave
        const prevX = x - sliceWidth;
        const prevY = (timeDataArray[i-1] / 128.0 * canvas.height / 2 * smoothness) + 
                      (canvas.height / 2 * (1 - smoothness));
        
        // Puntos de control para la curva
        const cp1x = prevX + sliceWidth / 4;
        const cp1y = prevY;
        const cp2x = x - sliceWidth / 4;
        const cp2y = y;
        
        canvasCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      }
      
      x += sliceWidth;
    }
    
    canvasCtx.stroke();
    
    // Dibujar barras de frecuencia
    canvasCtx.shadowBlur = 0;
    
    const barCount = 64;
    const barWidth = canvas.width / barCount;
    const barGap = 2;
    
    for (let i = 0; i < barCount; i++) {
      const dataIndex = Math.floor(i * bufferLength / barCount);
      const freqValue = freqDataArray[dataIndex];
      const barHeight = (freqValue / 255) * (canvas.height * 0.4);
      const barX = i * (barWidth + barGap);
      
      const barGradient = canvasCtx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
      
      const intensity = freqValue / 255;
      barGradient.addColorStop(0, `rgba(110, 231, 183, ${0.1 + intensity * 0.6})`);
      barGradient.addColorStop(1, `rgba(66, 109, 90, ${0.05 + intensity * 0.3})`);
      
      canvasCtx.fillStyle = barGradient;
      
      canvasCtx.beginPath();
      canvasCtx.roundRect(barX, canvas.height - barHeight, barWidth, barHeight, 2);
      canvasCtx.fill();
    }
    
    // Continuar animación
    animationRef.current = requestAnimationFrame(renderVisualizer);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
    }}>
      {/* Área progresada con un sutil gradiente */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: `${audioProgress}%`,
        background: 'linear-gradient(to right, rgba(110, 231, 183, 0.05), rgba(233, 166, 104, 0.05))',
        borderRight: `2px solid ${theme.colors.accent}`,
        boxShadow: `0 0 10px 1px ${theme.colors.accent}33`,
        zIndex: 1,
        pointerEvents: 'none'
      }}/>
      
      {/* Indicador de tiempo actual */}
      <div style={{
        position: 'absolute',
        left: `${audioProgress}%`,
        top: '15%',
        bottom: '15%',
        width: '2px',
        backgroundColor: theme.colors.accent,
        zIndex: 3,
        boxShadow: '0 0 8px rgba(255, 255, 255, 0.7)',
        pointerEvents: 'none'
      }}/>
      
      {/* Rejilla sutil de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
        opacity: 0.5
      }}/>
      
      {/* Canvas del visualizador */}
      <canvas 
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          opacity: 1,
          zIndex: 2
        }}
        onClick={onClick}
      />
    </div>
  );
};