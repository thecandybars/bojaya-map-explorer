// Hotspots based on the map locations - coordenadas ajustadas para imagen 1240 x 1772
export const hotspots = [
  {
    id: 1,
    category: 'memoria',
    name: 'Río Atrato',
    description: 'El río Atrato es la arteria principal dentro del territorio. Genera conexión sur-norte desde Quibdó. Es el lugar de memoria vital para las comunidades de la región.',
    position: { x: 48, y: 50 }, // Ajustado para nueva imagen
    details: [
      { title: 'Importancia Cultural', content: 'Arteria principal del territorio y vía de comunicación ancestral para las comunidades.' },
      { title: 'Características', content: 'Uno de los ríos más caudalosos del mundo en relación con su cuenca.' },
      { title: 'Cartografía Participativa', content: 'El río es un elemento central en la cartografía participativa de las comunidades locales.' }
    ]
  },
  {
    id: 2,
    category: 'conmemorativo',
    name: 'Iglesia de Bojayá',
    description: 'Sitio donde ocurrió la masacre del 2 de mayo de 2002. Hoy es un espacio conmemorativo donde se realizan ceremonias y rituales de memoria.',
    position: { x: 30, y: 35 },
    details: [
      { title: 'Significado', content: 'Espacio sagrado donde se conmemoran las víctimas de la masacre.' },
      { title: 'Actividades', content: 'Alabaos, Gualíes y Novenarios cada 2 de Mayo.' },
      { title: 'Patrimonio', content: 'Lugar de memoria reconocido a nivel nacional.' }
    ]
  },
  {
    id: 3,
    category: 'rituales',
    name: 'Casa de Rituales Ancestrales',
    description: 'Espacio dedicado a la práctica y preservación de rituales mortuorios tradicionales de las comunidades afro del Pacífico.',
    position: { x: 65, y: 40 },
    details: [
      { title: 'Rituales', content: 'Conservación de prácticas funerarias tradicionales.' },
      { title: 'Reconocimiento', content: 'Patrimonio inmaterial de la nación.' },
      { title: 'Transmisión', content: 'Espacio de enseñanza para nuevas generaciones.' }
    ]
  },
  {
    id: 4,
    category: 'encuentros',
    name: 'Centro Comunitario',
    description: 'Espacio para el encuentro y diálogo entre las comunidades locales. Se utiliza para reuniones, talleres y actividades colectivas.',
    position: { x: 55, y: 65 },
    details: [
      { title: 'Función', content: 'Apoyo a organizaciones y procesos comunitarios.' },
      { title: 'Actividades', content: 'Reuniones, talleres y eventos colectivos.' },
      { title: 'Gestión', content: 'Administrado por la comunidad local.' }
    ]
  },
  {
    id: 5,
    category: 'fortalecimiento',
    name: 'Centro de Capacitación',
    description: 'Lugar dedicado a la transferencia de conocimientos y fortalecimiento de capacidades locales.',
    position: { x: 40, y: 75 },
    details: [
      { title: 'Objetivo', content: 'Transferencia de experiencias a través de documentación y capacitación.' },
      { title: 'Metodología', content: 'Talleres prácticos y formación de formadores.' },
      { title: 'Impacto', content: 'Fortalecimiento de liderazgos locales.' }
    ]
  },
  {
    id: 6,
    category: 'promocion',
    name: 'Casa de la Dignidad',
    description: 'Centro dedicado a la promoción de los derechos humanos y la dignidad de las personas en la región.',
    position: { x: 70, y: 30 },
    details: [
      { title: 'Enfoque', content: 'Promoción de derechos humanos y dignidad.' },
      { title: 'Programas', content: 'Acompañamiento psicosocial y jurídico.' },
      { title: 'Alcance', content: 'Atención a víctimas y comunidades vulnerables.' }
    ]
  },
  {
    id: 7,
    category: 'museologia',
    name: 'Museo Territorial',
    description: 'Espacio museológico que documenta y preserva las expresiones culturales, históricas y territoriales de las comunidades indígenas y afro.',
    position: { x: 25, y: 55 },
    details: [
      { title: 'Colecciones', content: 'Objetos históricos, fotografías y documentos de la región.' },
      { title: 'Investigación', content: 'Procesos de investigación con comunidades indígenas.' },
      { title: 'Exposiciones', content: 'Muestras permanentes y temporales sobre el territorio.' }
    ]
  },
  {
    id: 8,
    category: 'articulacion',
    name: 'Mesa de Diálogo Interinstitucional',
    description: 'Punto de encuentro y articulación entre instituciones gubernamentales, organizaciones sociales y comunidades.',
    position: { x: 50, y: 25 },
    details: [
      { title: 'Propósito', content: 'Coordinación de acciones entre diferentes actores.' },
      { title: 'Participantes', content: 'Instituciones públicas, organizaciones sociales y líderes comunitarios.' },
      { title: 'Logros', content: 'Generación de acuerdos para el beneficio de la región.' }
    ]
  },
  {
    id: 9,
    category: 'archivo',
    name: 'Archivo Histórico',
    description: 'Repositorio documental que preserva la memoria histórica de la región y sus comunidades.',
    position: { x: 80, y: 60 },
    details: [
      { title: 'Acervo', content: 'Documentos, fotografías, testimonios y registros audiovisuales.' },
      { title: 'Acceso', content: 'Disponible para investigadores y comunidad en general.' },
      { title: 'Conservación', content: 'Medidas especiales para la preservación del material histórico.' }
    ]
  }
];
