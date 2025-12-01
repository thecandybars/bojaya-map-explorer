// Hotspots based on the map locations - coordenadas ajustadas para imagen 1240 x 1772
export const hotspots = [
  {
    id: 1,
    category: 'memoria',
    name: 'ESCUELA',
    description: 'Esta fase incluye la restauración y mejoramiento de la antigua escuela primaria aledaña a la iglesia en el Bellavista Viejo. La infraestructura existente cuenta con alrededor de 450 m2 construidos y busca ser transformado en un espacio de exposición que permita la muestra, tanto de la historia de la violencia, como de la cultura presente en el territorio.La restauración conservará la estructura original del inmueble e integrará elementos modernos para seguridad y uso cultural y pedagógico.El proyecto busca promover la memoria histórica, la participación comunitaria y la conexión con la naturaleza, fortaleciendo así la identidad y saberes del territorio.',
    position: { x: 46, y: 55 }, // Ajustado para nueva imagen
    details: [
      { title: 'Importancia Cultural', content: 'Arteria principal del territorio y vía de comunicación ancestral para las comunidades.' },
      { title: 'Características', content: 'Uno de los ríos más caudalosos del mundo en relación con su cuenca.' },
      { title: 'Cartografía Participativa', content: 'El río es un elemento central en la cartografía participativa de las comunidades locales.' }
    ]
  },
  {
    id: 2,
    category: 'conmemorativo',
    name: 'IGLESIA',
    description: 'La intervención propuesta en la Iglesia de Bellavista viejo tiene como objetivo preservar este espacio como lugar de conmemoración, sagrado y de memoria, respetando su significación tanto religiosa como histórica para la comunidad. La iglesia albergará importantes piezas de culto, como el Cristo Mutilado y la Virgen del Sagrado Corazón, y otras obras simbólicas que tienen un profundo valor para la comunidad local.',
    position: { x: 46, y: 52 },
    details: [
      { title: 'Significado', content: 'Espacio sagrado donde se conmemoran las víctimas de la masacre.' },
      { title: 'Actividades', content: 'Alabaos, Gualíes y Novenarios cada 2 de Mayo.' },
      { title: 'Patrimonio', content: 'Lugar de memoria reconocido a nivel nacional.' }
    ]
  },
  {
    id: 3,
    category: 'rituales',
    name: 'SENDERO',
    description: 'El Sendero de la Memoria es una intervención que une Bellavista Nuevo y Bellavista Viejo, dos comunidades actualmente separadas por el río, con el propósito de fortalecer el tejido del espacio de memoria en Bojayá. Esta conexión tiene un profundo valor simbólico y funcional: no solo facilita el tránsito entre los poblados, sino que enlaza el pasado marcado por hechos dolorosos con la vida presente de sus habitantes. Además, articula a la comunidad con el Lugar de Memoria, promoviendo su apropiación, cuidado colectivo y resignificación desde la experiencia local.',
    position: { x: 60, y: 65 },
    details: [
      { title: 'Rituales', content: 'Conservación de prácticas funerarias tradicionales.' },
      { title: 'Reconocimiento', content: 'Patrimonio inmaterial de la nación.' },
      { title: 'Transmisión', content: 'Espacio de enseñanza para nuevas generaciones.' }
    ]
  },
  {
    id: 4,
    category: 'encuentros',
    name: 'TAMBOS',
    description: 'Cinco tambos para la comunidad Embera, espacios que preservan y transmiten saberes ancestrales. Cada tambo cumple una función específica y se diseñará según la arquitectura tradicional Embera, adaptada para asegurar durabilidad, uso eficiente de materiales locales y accesibilidad, fortaleciendo así la reparación y la identidad cultural comunitaria.',
    position: { x: 55, y: 60 },
    details: [
      { title: 'Función', content: 'Apoyo a organizaciones y procesos comunitarios.' },
      { title: 'Actividades', content: 'Reuniones, talleres y eventos colectivos.' },
      { title: 'Gestión', content: 'Administrado por la comunidad local.' }
    ]
  },
  {
    id: 5,
    category: 'fortalecimiento',
    name: 'ANTIGUO CENTRO DE SALUD',
    description: 'El antiguo centro de salud se transformará en un espacio dedicado a la investigación y preservación de la medicina tradicional afro e indígena. Incluirá áreas para talleres, estudios y cultivo de plantas medicinales, con información cultural e histórica. También contará con una zona de exposición de herramientas y objetos ancestrales, promoviendo el intercambio de saberes y el respeto por estas prácticas esenciales para la salud comunitaria.',
    position: { x: 48, y: 49 },
    details: [
      { title: 'Objetivo', content: 'Transferencia de experiencias a través de documentación y capacitación.' },
      { title: 'Metodología', content: 'Talleres prácticos y formación de formadores.' },
      { title: 'Impacto', content: 'Fortalecimiento de liderazgos locales.' }
    ]
  },
  {
    id: 6,
    category: 'promocion',
    name: 'PALACIO MUNICIPAL',
    description: 'La intervención en el Palacio Municipal de Bojayá busca preservar su ruina como símbolo de memoria y resistencia. No se restaurará totalmente; se protegerá con una sobrecubierta para evitar deterioro, garantizando acceso seguro. Se instalará una placa informativa sobre su historia y habrá mediadores que guiarán a los visitantes, promoviendo la reflexión y el aprendizaje sobre los hechos ocurridos y su significado para la comunidad y la paz',
    position: { x: 53, y: 55 },
    details: [
      { title: 'Enfoque', content: 'Promoción de derechos humanos y dignidad.' },
      { title: 'Programas', content: 'Acompañamiento psicosocial y jurídico.' },
      { title: 'Alcance', content: 'Atención a víctimas y comunidades vulnerables.' }
    ]
  },
  {
    id: 7,
    category: 'museologia',
    name: 'CASA AGUSTINAS',
    description: 'La intervención propuesta en la Casa de las Hermanas Misioneras Agustinas tiene como objetivo la preservación, mantenimiento y adecuación de la estructura existente para convertirla en un centro de formación universitaria y hospedaje. Este proyecto busca respetar la memoria histórica del lugar, transformando las ruinas de la casa en un espacio propicio para retiros educativos y espirituales, donde los visitantes puedan experimentar una conexión profunda con la historia, la espiritualidad y la naturaleza que rodea el sitio.',
    position: { x: 50, y: 55 },
    details: [
      { title: 'Colecciones', content: 'Objetos históricos, fotografías y documentos de la región.' },
      { title: 'Investigación', content: 'Procesos de investigación con comunidades indígenas.' },
      { title: 'Exposiciones', content: 'Muestras permanentes y temporales sobre el territorio.' }
    ]
  },
  {
    id: 8,
    category: 'articulacion',
    name: 'CANCHA Y SUS GRADAS',
    description: 'La intervención en la cancha y gradas del Lugar de Memoria de Bojayá busca restaurar este símbolo de resistencia y neutralidad durante el conflicto armado. Más que un espacio deportivo, representa la valentía de la comunidad reflejada en la “Declaración por la Vida y por la Paz”. Se reconstruirán gradas y se reacondicionará la cancha con participación comunitaria, asegurando que el lugar recupere su valor simbólico y funcione como espacio de memoria y encuentro para futuras generaciones.',
    position: { x: 45, y: 49 },
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
    position: { x: 380, y: 500 },
    details: [
      { title: 'Acervo', content: 'Documentos, fotografías, testimonios y registros audiovisuales.' },
      { title: 'Acceso', content: 'Disponible para investigadores y comunidad en general.' },
      { title: 'Conservación', content: 'Medidas especiales para la preservación del material histórico.' }
    ]
  }
];
