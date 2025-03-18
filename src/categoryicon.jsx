import React from 'react';

/**
 * Componente que renderiza iconos personalizados para cada categoría
 * basados en los iconos exactos del mapa Plan Vivo de Memoria y Paisaje de Bojayá
 */
export const CategoryIcon = ({ category, color = 'white', size = 24 }) => {
  const iconStyle = {
    display: 'inline-block',
    width: size,
    height: size,
    color: color,
  };

  // Renderiza el icono SVG correspondiente a cada categoría (basado en el mapa original)
  switch (category) {
    case 'memoria':
      // Icono del río serpenteante - "El lugar de memoria: El río Atrato" (Cartografía participativa)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M2 12c2-3 4-2 6 0s4 2 6 0 4-3 6 0" />
          <path d="M2 18c2-3 4-2 6 0s4 2 6 0 4-3 6 0" />
          <path d="M2 6c2-3 4-2 6 0s4 2 6 0 4-3 6 0" />
        </svg>
      );

    case 'conmemorativo':
      // Icono de vela/llama - "Conmemorativo" (Alabaos, Gualíes y Novenarios del 02 de Mayo)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M12 3c0 0-4 6-4 9a4 4 0 0 0 8 0c0-3-4-9-4-9z" />
          <path d="M12 21v-4" />
        </svg>
      );

    case 'rituales':
      // Icono de planta/hoja - "Rituales Mortuorios" (Patrimonio inmaterial de la nación)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M12 22v-8" />
          <path d="M12 14c-3-3-3-8-3-10 5 2 7 5 8 9-5-2-5 1-5 1z" />
          <path d="M12 14c3-3 3-8 3-10-5 2-7 5-8 9 5-2 5 1 5 1z" />
        </svg>
      );

    case 'encuentros':
      // Icono de manos/conexión humana - "Espacios de encuentro" (Apoyo a organizaciones de procesos)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M7 5a3 3 0 0 0-3 3v2c0 1.1.9 2 2 2h2" />
          <path d="M17 5a3 3 0 0 1 3 3v2c0 1.1-.9 2-2 2h-2" />
          <path d="M12 17v-6" />
          <path d="M7 14h10" />
        </svg>
      );

    case 'fortalecimiento':
      // Icono de transmisión/documentación - "Fortalecimiento de experiencias" (Transferencia)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M3 7l3-3 3 3" />
          <path d="M6 4v6" />
          <path d="M21 17l-3 3-3-3" />
          <path d="M18 20v-6" />
        </svg>
      );

    case 'promocion':
      // Icono de megáfono - "Promoción y fortalecimiento" (De la vida y dignidad)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M18 8a3 3 0 0 1 0 6" />
          <path d="M10 8v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1h6v-7l8-4v10l-8-4" />
        </svg>
      );

    case 'museologia':
      // Icono de museo/estructura - "Museología Territorial" (Promoción y realización de procesos)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M3 21h18" />
          <path d="M5 21v-4h4v4" />
          <path d="M15 21v-4h4v4" />
          <path d="M4 7v.01" />
          <path d="M20 7v.01" />
          <path d="M4 11v.01" />
          <path d="M20 11v.01" />
          <path d="M4 15v.01" />
          <path d="M20 15v.01" />
          <path d="M12 3l-7 4h14l-7-4z" />
        </svg>
      );

    case 'articulacion':
      // Icono de conexión/red - "Articulación Interinstitucional" (Promoción de espacios de diálogo)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 7v10" />
          <path d="M7 5h10" />
          <path d="M7 19h10" />
          <path d="M19 7v10" />
        </svg>
      );

    case 'archivo':
      // Icono de documentos/registro - "Archivo y memoria histórica" (Registro de la región)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M5 12v-7a2 2 0 0 1 2-2h7l5 5v4" />
          <path d="M5 21h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z" />
          <path d="M9 17h6" />
          <path d="M9 13h6" />
        </svg>
      );

    case 'all':
      // Icono para "Todos los puntos" - ícono genérico de mapa con puntos
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M5 12a7 7 0 0 0 7 7" />
          <path d="M12 19a7 7 0 0 0 7-7" />
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    
    default:
      // Icono por defecto para cualquier otro caso - punto simple
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={iconStyle}
        >
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
  }
};