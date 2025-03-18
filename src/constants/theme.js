// Theme based on the Bojayá map image - refined color palette
export const theme = {
  colors: {
    primary: '#426D5A',         // Forest green from the map
    secondary: '#A0C6E1',       // Light blue from rivers/water
    accent: '#E9A668',          // Orange/ochre from points on the map
    dark: '#1F3A2D',            // Very dark green for contrast
    light: '#F3F7F4',           // Light green-white for backgrounds
    textDark: '#2A3B35',        // Dark text
    textLight: '#F8F9FA',       // Light text
    highlight: '#D35FB3',       // Accent color for interactive elements
    warning: '#E45F5F',         // Warning/alert color
    riverBlue: '#7CBBCD',       // River blue from the map
    mapGreen: '#6B8F78',        // Main map green
    mapBackground: '#3D5447',   // Darker green background
    caribbeanSea: '#A0C6E1',    // Caribbean sea blue
    pacificOcean: '#90B4D0',    // Pacific ocean blue
    borderLight: 'rgba(255, 255, 255, 0.2)', // Light border
    borderDark: 'rgba(0, 0, 0, 0.2)',       // Dark border
    
    // Category colors directly from the map
    memoriaColor: '#D35FB3',    // Pink/purple for "El lugar de memoria"
    conmemorativoColor: '#D35FB3', // Pink/purple for "Conmemorativo"
    ritualesColor: '#70D684',   // Green for "Rituales Mortuorios"
    encuentrosColor: '#E4A05F',  // Orange for "Espacios de encuentro"
    fortalecimientoColor: '#5FB3D3', // Blue for "Fortalecimiento"
    promocionColor: '#E9A668',  // Orange/ochre for "Promoción"
    museologiaColor: '#A0C4B9', // Teal for "Museología Territorial"
    articulacionColor: '#5FE4B3', // Turquoise for "Articulación"
    archivoColor: '#5F87E4',    // Blue for "Archivo y memoria"
  },
  fonts: {
    primary: '"Montserrat", -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: '"Georgia", serif',
  },
  gradients: {
    darkOverlay: 'linear-gradient(to bottom, rgba(31, 58, 45, 0.9), rgba(31, 58, 45, 0.7))',
    lightOverlay: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    accentGradient: 'linear-gradient(135deg, #E9A668, #D35FB3)',
    mapBackground: 'linear-gradient(to bottom, #3D5447, #1F3A2D)',
    buttonGradient: 'linear-gradient(to bottom, rgba(75, 85, 99, 0.7), rgba(31, 41, 55, 0.9))',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 15px rgba(233, 166, 104, 0.3)',
  }
};
