import { theme } from './theme';

// Categories exactly matching the map legend
export const categories = [
  { 
    id: 'all', 
    name: 'Todos los puntos', 
    color: theme.colors.primary,
    icon: 'all',
    description: 'Visualizar todos los puntos de interés'
  },
  { 
    id: 'memoria', 
    name: 'El lugar de memoria: El río Atrato', 
    color: theme.colors.memoriaColor,
    icon: 'memoria',
    description: 'Cartografía participativa'
  },
  { 
    id: 'conmemorativo', 
    name: 'Conmemorativo', 
    color: theme.colors.conmemorativoColor,
    icon: 'conmemorativo',
    description: 'Alabaos, Gualíes y Novenarios del 02 de Mayo'
  },
  { 
    id: 'rituales', 
    name: 'Rituales Mortuorios', 
    color: theme.colors.ritualesColor,
    icon: 'rituales',
    description: 'Patrimonio inmaterial de la nación'
  },
  { 
    id: 'encuentros', 
    name: 'Espacios de encuentro', 
    color: theme.colors.encuentrosColor,
    icon: 'encuentros',
    description: 'Apoyo a organizaciones de procesos'
  },
  { 
    id: 'fortalecimiento', 
    name: 'Fortalecimiento de experiencias', 
    color: theme.colors.fortalecimientoColor,
    icon: 'fortalecimiento',
    description: 'Transferencia de experiencias a través de documentación y capacitación'
  },
  { 
    id: 'promocion', 
    name: 'Promoción y fortalecimiento', 
    color: theme.colors.promocionColor,
    icon: 'promocion',
    description: 'De la vida y dignidad de las personas'
  },
  { 
    id: 'museologia', 
    name: 'Museología Territorial', 
    color: theme.colors.museologiaColor,
    icon: 'museologia',
    description: 'Promoción y realización de procesos de investigación con comunidades indígenas'
  },
  { 
    id: 'articulacion', 
    name: 'Articulación Interinstitucional', 
    color: theme.colors.articulacionColor,
    icon: 'articulacion',
    description: 'Promoción de espacios de diálogo'
  },
  { 
    id: 'archivo', 
    name: 'Archivo y memoria histórica', 
    color: theme.colors.archivoColor,
    icon: 'archivo',
    description: 'Registro de la región'
  }
];
