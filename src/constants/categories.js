import { theme } from './theme';

// Categories exactly matching the map legend
export const categories = [

  { 
    id: 'memoria', 
    name: 'Conmemorativo', 
    color: theme.colors.memoriaColor,
    icon: 'memoria',
    description: 'Se establecerán espacios para recordar y honrar a las víctimas, promoviendo la reflexión sobre su historia.'
  },
  { 
    id: 'conmemorativo', 
    name: 'Rituales mortuorios', 
    color: theme.colors.conmemorativoColor,
    icon: 'conmemorativo',
    description: 'Se fortalecerán los elementos culturales de los rituales mortuorios a través de la comunicación y el intercambio de experiencias'
  },
  { 
    id: 'rituales', 
    name: 'Fortalecimiento a procesos e iniciativas de memoria', 
    color: theme.colors.ritualesColor,
    icon: 'rituales',
    description: 'Se apoyarán y promoverán iniciativas locales que contribuyan a la memoria histórica'
  },
  { 
    id: 'encuentros', 
    name: 'Comunicación y Memoria Histórica', 
    color: theme.colors.encuentrosColor,
    icon: 'encuentros',
    description: 'Se potenciarán los medios de comunicación para difundir la memoria histórica y las experiencias de las comunidades'
  },
  { 
    id: 'fortalecimiento', 
    name: 'ANTIGUO CENTRO DE SALUD', 
    color: theme.colors.fortalecimientoColor,
    icon: 'Fortalecimiento de redes y lugares de memoria',
    description: 'Se crearán redes a nivel local, regional y nacional para compartir y fortalecer las experiencias de memoria'
  },
  { 
    id: 'promocion', 
    name: 'Museología territorial comunitaria', 
    color: theme.colors.promocionColor,
    icon: 'promocion',
    description: 'Se implementará un proceso de museología que contemple las necesidades y la historia de la comunidad.'
  },
  { 
    id: 'museologia', 
    name: 'Archivo', 
    color: theme.colors.museologiaColor,
    icon: 'Articulación Interinstitucional',
    description: 'Se desarrollará un archivo que centralice y organice la información relevante para la memoria histórica.'
  },
  { 
    id: 'articulacion', 
    name: 'Adecuación de espacios', 
    color: theme.colors.articulacionColor,
    icon: 'articulacion',
    description: 'Se realizarán adecuaciones físicas en los espacios destinados a la memoria para facilitar su uso y acceso'
  }
];
