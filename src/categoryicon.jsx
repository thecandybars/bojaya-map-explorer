import React from 'react';
import { 
  GraduationCap, 
  Church, 
  Route, 
  Leaf, 
  Heart, 
  Building2, 
  Target,
  MapPin
} from 'lucide-react';

// Import PNG icons for legend
import icon1 from './assets/Iconos/1.png';
import icon2 from './assets/Iconos/2.png';
import icon3 from './assets/Iconos/3.png';
import icon4 from './assets/Iconos/4.png';
import icon5 from './assets/Iconos/5.png';
import icon6 from './assets/Iconos/6.png';
import icon7 from './assets/Iconos/7.png';
import icon8 from './assets/Iconos/8.png';

/**
 * Componente que renderiza diferentes tipos de iconos según el uso
 * - Lucide icons para hotspots y category buttons (basados en nombres específicos)
 * - PNG icons para legend/convenciones (basados en categorías generales)
 */
export const CategoryIcon = ({ category, color = 'white', size = 24, useFor = 'hotspot' }) => {
  // For legend/convenciones - use PNG icons
  if (useFor === 'legend') {
    const iconStyle = {
      width: size,
      height: size,
      objectFit: 'contain',
      filter: color !== 'white' ? 'none' : 'brightness(0) invert(1)'
    };

    const getIconForCategory = (categoryId) => {
      switch (categoryId) {
        case 'memoria': return icon1;
        case 'conmemorativo': return icon2;
        case 'rituales': return icon3;
        case 'encuentros': return icon4;
        case 'fortalecimiento': return icon5;
        case 'promocion': return icon6;
        case 'museologia': return icon7;
        case 'articulacion': return icon8;
        default: return icon1;
      }
    };

    return (
      <img
        src={getIconForCategory(category)}
        alt={`Icono ${category}`}
        style={iconStyle}
      />
    );
  }

  // For hotspots and category buttons - use Lucide icons based on specific names
  const iconStyle = {
    width: size,
    height: size,
    color: color
  };

  switch (category) {
    case 'memoria': // ESCUELA
      return <GraduationCap size={size} color={color} style={iconStyle} />;
    
    case 'conmemorativo': // IGLESIA
      return <Church size={size} color={color} style={iconStyle} />;
    
    case 'rituales': // SENDERO
      return <Route size={size} color={color} style={iconStyle} />;
    
    case 'encuentros': // TAMBOS
      return <Leaf size={size} color={color} style={iconStyle} />;
    
    case 'fortalecimiento': // ANTIGUO CENTRO DE SALUD
      return <Heart size={size} color={color} style={iconStyle} />;
    
    case 'promocion': // PALACIO MUNICIPAL
      return <Building2 size={size} color={color} style={iconStyle} />;
    
    case 'museologia': // CASA AGUSTINAS
      return <Church size={size} color={color} style={iconStyle} />;
    
    case 'articulacion': // CANCHA Y SUS GRADAS
      return <Target size={size} color={color} style={iconStyle} />;
    
    default:
      return <MapPin size={size} color={color} style={iconStyle} />;
  }
};