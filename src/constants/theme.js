// Theme based on the Bojayá memorial UI
export const theme = {
  colors: {
    primary: '#000000',         // Black background
    secondary: '#7CBBCD',       // Light blue accent from original theme
    accent: '#64B0A4',          // Teal/mint green accent
    dark: '#000000',            // Black for backgrounds
    light: '#FFFFFF',           // Pure white for contrast
    textDark: '#000000',        // Black text
    textLight: '#FFFFFF',       // White text
    highlight: '#64B0A4',       // Teal/mint highlight for interactive elements
    warning: '#E45F5F',         // Warning/alert color
    borderLight: 'rgba(255, 255, 255, 0.2)', // Light border
    borderDark: 'rgba(0, 0, 0, 0.2)',       // Dark border
    
    // Category colors from the memorial UI - complementary to teal/mint
    memoriaColor: '#64B0A4',    // Teal/mint green for "El lugar de memoria"
    conmemorativoColor: '#D64C9C', // Magenta for "Conmemorativo"
    ritualesColor: '#67AC91',   // Muted green for "Rituales Mortuorios"
    encuentrosColor: '#3D9CAB',  // Darker teal for "Espacios de encuentro"
    fortalecimientoColor: '#C45FA0', // Fuchsia for "Fortalecimiento"
    promocionColor: '#56A3B0',  // Blue-teal for "Promoción"
    museologiaColor: '#89C0B6', // Pale teal for "Museología Territorial"
    articulacionColor: '#B54A9A', // Purple-magenta for "Articulación"
    archivoColor: '#4AB5B4',    // Turquoise for "Archivo y memoria"
  },
  fonts: {
    primary: '"Montserrat", -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: '"Georgia", serif',
  },
  gradients: {
    darkOverlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
    lightOverlay: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    accentGradient: 'linear-gradient(135deg, #64B0A4, #64B0A4)',
    mapBackground: 'linear-gradient(to bottom, #000000, #000000)',
    buttonGradient: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 15px rgba(100, 176, 164, 0.3)',
  }
};
