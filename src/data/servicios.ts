/**
 * Catálogo global de servicios — Vaciados Terrassa Pro
 * Los textos admiten variables {ciudad}, {provincia}, {empresa} que se
 * interpolan en tiempo de build. Ver src/data/index.ts → interpolate().
 */

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface PasosProceso {
  titulo: string;
  descripcion: string;
}

export interface ServicioBase {
  slug: string;
  nombre: string;
  /** Descripción corta (meta description) */
  descripcionCorta: string;
  /** Descripción larga para la intro de la landing */
  descripcionLarga: string;
  beneficios: string[];
  proceso: PasosProceso[];
  faqs: FAQ[];
}

export const servicios: ServicioBase[] = [
  {
    slug: 'vaciado-pisos',
    nombre: 'Vaciado de pisos',
    descripcionCorta:
      'Vaciado completo de pisos en {ciudad}. Retiramos muebles, enseres y trastos. Presupuesto gratuito. {empresa}.',
    descripcionLarga:
      'En {empresa} realizamos el vaciado integral de pisos en {ciudad} y toda la provincia de {provincia}. Nos encargamos de retirar muebles, electrodomésticos, ropa, trastos y cualquier tipo de enseres, dejando el inmueble completamente vacío y limpio. Ideal para herencias, cambios de piso, reformas o propiedades en alquiler.',
    beneficios: [
      'Vaciado completo en un solo día en la mayoría de casos',
      'Retiramos todo: muebles, electrodomésticos, ropa y trastos',
      'Presupuesto gratuito y sin compromiso en {ciudad}',
      'Gestionamos el reciclaje y la donación de objetos en buen estado',
      'Equipo propio sin subcontratas — más rapidez y control',
      'Servicio disponible en {ciudad} y toda la provincia de {provincia}',
    ],
    proceso: [
      {
        titulo: 'Visita o fotos para presupuesto',
        descripcion:
          'Nos envías fotos del piso o concertamos una visita en {ciudad}. En menos de 24 horas recibes un presupuesto cerrado y sin sorpresas.',
      },
      {
        titulo: 'Confirmación y fecha',
        descripcion:
          'Aceptas el presupuesto y fijamos el día. Nos adaptamos a tu disponibilidad, incluyendo fines de semana si es necesario.',
      },
      {
        titulo: 'Vaciado completo',
        descripcion:
          'Nuestro equipo acude puntual, protege escaleras y zonas comunes, y vacía el piso de forma ordenada y eficiente.',
      },
      {
        titulo: 'Entrega y limpieza básica',
        descripcion:
          'Dejamos el piso vacío y realizamos una limpieza básica de polvo y restos. El inmueble queda listo para visitar, reformar o alquilar.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta vaciar un piso en {ciudad}?',
        respuesta:
          'El precio depende del tamaño del piso y la cantidad de enseres. Un piso de 70–90 m² suele costar entre 250 € y 500 €. Ofrecemos presupuesto gratuito en {ciudad} — contáctanos y te lo enviamos en menos de 24 h.',
      },
      {
        pregunta: '¿Cuánto tiempo tarda el vaciado?',
        respuesta:
          'La mayoría de pisos se vacían en un solo día. Un piso de 3 habitaciones con mobiliario completo suele llevar entre 4 y 8 horas con nuestro equipo en {ciudad}.',
      },
      {
        pregunta: '¿Qué hacéis con los muebles y objetos retirados?',
        respuesta:
          'Separamos los objetos en buen estado para donarlos a entidades sociales o venderlos de segunda mano. El resto lo llevamos a puntos de reciclaje autorizados en {provincia}. Trabajamos de forma responsable con el medio ambiente.',
      },
      {
        pregunta: '¿Podéis vaciar un piso con herencia o trámites pendientes?',
        respuesta:
          'Sí. Trabajamos habitualmente con gestorías, notarías y familiares en proceso de herencia en {ciudad}. Podemos coordinar el vaciado con los tiempos legales y documentar lo retirado si es necesario.',
      },
      {
        pregunta: '¿Hacéis el vaciado en fines de semana?',
        respuesta:
          'Sí, disponemos de servicio en fines de semana en {ciudad} con cita previa. Consúltanos disponibilidad al solicitar el presupuesto.',
      },
    ],
  },

  {
    slug: 'vaciado-locales',
    nombre: 'Vaciado de locales',
    descripcionCorta:
      'Vaciado de locales comerciales y naves en {ciudad}. Rápido, limpio y con gestión de residuos. {empresa}.',
    descripcionLarga:
      'En {empresa} vaciamos locales comerciales, oficinas, almacenes y naves industriales en {ciudad} y la provincia de {provincia}. Retiramos estanterías, maquinaria, mobiliario de oficina, archivos y cualquier tipo de material, gestionando correctamente los residuos según la normativa vigente.',
    beneficios: [
      'Vaciado de locales, oficinas, almacenes y naves industriales',
      'Desmontaje de estanterías, mostradores y mobiliario fijo',
      'Gestión de residuos según normativa en {provincia}',
      'Flexibilidad horaria para minimizar impacto en el negocio',
      'Presupuesto gratuito adaptado al volumen real del local',
      'Equipo con experiencia en vaciados comerciales en {ciudad}',
    ],
    proceso: [
      {
        titulo: 'Inspección del local',
        descripcion:
          'Visitamos el local en {ciudad} o valoramos por fotos/vídeo. Identificamos materiales especiales o residuos que requieren gestión específica.',
      },
      {
        titulo: 'Presupuesto detallado',
        descripcion:
          'Te entregamos un presupuesto cerrado con el coste total, sin extras ocultos. Incluye transporte, mano de obra y gestión de residuos.',
      },
      {
        titulo: 'Vaciado y desmontaje',
        descripcion:
          'Nuestro equipo retira todo el contenido del local, desmonta elementos fijos si es necesario y carga los camiones de forma organizada.',
      },
      {
        titulo: 'Gestión y certificado',
        descripcion:
          'Llevamos los materiales a puntos autorizados en {provincia} y, si lo necesitas, emitimos certificado de gestión de residuos.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis vaciar un local mientras sigo abierto?',
        respuesta:
          'Sí. Organizamos el vaciado por fases o en horario nocturno para no interrumpir tu actividad. Consúltanos y buscamos la solución más cómoda para tu negocio en {ciudad}.',
      },
      {
        pregunta: '¿Gestionáis los residuos de maquinaria y electrónica?',
        respuesta:
          'Sí. Los equipos electrónicos, maquinaria y materiales especiales se llevan a gestores autorizados en {provincia}. Podemos emitir certificado de gestión si lo requieres para la baja de actividad.',
      },
      {
        pregunta: '¿Cuánto cuesta vaciar un local en {ciudad}?',
        respuesta:
          'El precio varía según el tamaño y el tipo de contenido. Un local pequeño de 50–80 m² suele estar entre 350 € y 700 €. Pídenos presupuesto gratuito y sin compromiso.',
      },
      {
        pregunta: '¿Desmontáis estanterías y mobiliario fijo?',
        respuesta:
          'Sí, incluimos el desmontaje de estanterías, mostradores, mamparas y otro mobiliario fijo en el servicio estándar. Si hay elementos que requieren trabajo de albañilería, te lo indicamos en el presupuesto.',
      },
      {
        pregunta: '¿Trabajáis en toda la provincia de {provincia}?',
        respuesta:
          'Sí. Vaciamos locales en {ciudad} y en todos los municipios de la provincia de {provincia}. El desplazamiento está incluido en el presupuesto para la zona de {ciudad} y alrededores.',
      },
    ],
  },

  {
    slug: 'recogida-muebles',
    nombre: 'Recogida de muebles',
    descripcionCorta:
      'Recogida y retirada de muebles sueltos en {ciudad}. Rápido, sin esperas y con gestión responsable. {empresa}.',
    descripcionLarga:
      'En {empresa} recogemos muebles sueltos, electrodomésticos y objetos voluminosos en {ciudad} y alrededores de {provincia}. No hace falta vaciar el piso entero: si solo necesitas deshacerte de un sofá, una cama, un armario o varios electrodomésticos, nos encargamos de la recogida y el transporte al punto limpio o centro de reutilización más cercano.',
    beneficios: [
      'Recogida de muebles sueltos sin necesidad de vaciar el piso',
      'Sofás, camas, armarios, electrodomésticos y objetos voluminosos',
      'Donamos a entidades sociales los objetos en buen estado',
      'Servicio rápido — muchas veces el mismo día o al día siguiente en {ciudad}',
      'Sin desplazamientos ni gestiones para ti',
      'Precio justo según el volumen real recogido',
    ],
    proceso: [
      {
        titulo: 'Dinos qué quieres retirar',
        descripcion:
          'Envíanos una lista o fotos de los muebles o enseres. Te damos precio inmediato para recogidas sencillas o presupuesto en 24 h para volúmenes mayores.',
      },
      {
        titulo: 'Fijamos fecha y hora',
        descripcion:
          'Elegimos juntos el momento más cómodo para ti en {ciudad}. Podemos ajustarnos a mañanas, tardes o fines de semana.',
      },
      {
        titulo: 'Recogida en tu domicilio',
        descripcion:
          'Bajamos los muebles desde tu piso, protegemos escaleras y zonas comunes y los cargamos en nuestro vehículo. No tienes que mover nada.',
      },
      {
        titulo: 'Destino responsable',
        descripcion:
          'Los muebles en buen estado van a centros de reutilización o entidades sociales. El resto, al punto limpio autorizado de {provincia}.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta la recogida de un mueble en {ciudad}?',
        respuesta:
          'Depende del tipo y cantidad de piezas. Una recogida sencilla (sofá + mesa) suele costar entre 60 € y 120 €. Pídenos precio por WhatsApp con una foto y te respondemos enseguida.',
      },
      {
        pregunta: '¿Subís a buscar los muebles al piso?',
        respuesta:
          'Sí, subimos hasta tu vivienda, desmontamos si es necesario y bajamos los muebles nosotros. No tienes que hacer ningún esfuerzo ni bajar nada a la calle.',
      },
      {
        pregunta: '¿Podéis recoger electrodomésticos viejos?',
        respuesta:
          'Sí. Recogemos frigoríficos, lavadoras, lavavajillas, televisores y cualquier electrodoméstico. Los llevamos a un gestor autorizado de RAEE (residuos de aparatos eléctricos) en {provincia}.',
      },
      {
        pregunta: '¿Qué pasa con los muebles que están en buen estado?',
        respuesta:
          'Los entregamos a entidades sociales, asociaciones de ayuda o los ponemos en plataformas de segunda mano. Damos una segunda vida a todo lo que sea reutilizable antes de llevarlo al punto limpio.',
      },
      {
        pregunta: '¿Hacéis recogidas urgentes en {ciudad}?',
        respuesta:
          'En muchos casos podemos recogerte el mismo día o al día siguiente en {ciudad}. Llámanos o escríbenos por WhatsApp y miramos disponibilidad inmediata.',
      },
    ],
  },

  {
    slug: 'limpieza-diogenes',
    nombre: 'Limpieza síndrome de Diógenes',
    descripcionCorta:
      'Limpieza especializada por síndrome de Diógenes en {ciudad}. Actuación discreta, desinfección profunda y recuperación del inmueble. {empresa}.',
    descripcionLarga:
      'En {empresa} llevamos a cabo intervenciones especializadas en viviendas afectadas por el síndrome de Diógenes en {ciudad} y la provincia de {provincia}. Actuamos con total discreción y confidencialidad, retirando la acumulación de objetos y residuos orgánicos, desinfectando a fondo y dejando el inmueble en condiciones habitables.',
    beneficios: [
      'Actuación totalmente discreta y confidencial en {ciudad}',
      'Retirada de acumulación de objetos y residuos orgánicos',
      'Desinfección y desinsectación profunda del inmueble',
      'Equipo especializado con EPIs y formación específica',
      'Gestión de residuos certificada según normativa de {provincia}',
      'Coordinación con servicios sociales o familiares si es necesario',
    ],
    proceso: [
      {
        titulo: 'Valoración discreta',
        descripcion:
          'Visitamos el inmueble en {ciudad} para evaluar el grado de afectación. Toda la gestión es confidencial.',
      },
      {
        titulo: 'Retirada de acumulación',
        descripcion:
          'Retiramos objetos, residuos y materiales orgánicos de forma ordenada, clasificando lo que puede donarse o reciclarse.',
      },
      {
        titulo: 'Desinfección profunda',
        descripcion:
          'Aplicamos tratamiento de desinfección, desinsectación y eliminación de olores en suelos, paredes, techos y mobiliario que permanezca.',
      },
      {
        titulo: 'Entrega del inmueble',
        descripcion:
          'Dejamos la vivienda limpia y en condiciones habitables. Emitimos certificado de gestión de residuos si se requiere.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Actuáis con discreción en casos de síndrome de Diógenes en {ciudad}?',
        respuesta:
          'Sí. Trabajamos con la máxima confidencialidad. Nuestro equipo acude sin identificación visible y coordinamos el trabajo para minimizar la exposición ante vecinos o terceros.',
      },
      {
        pregunta: '¿Cuánto cuesta una limpieza por síndrome de Diógenes?',
        respuesta:
          'El precio depende del grado de acumulación y el tamaño del inmueble. Requiere visita previa para presupuestar correctamente. El presupuesto es gratuito y sin compromiso.',
      },
      {
        pregunta: '¿Podéis coordinarlo con servicios sociales o la familia?',
        respuesta:
          'Sí. Trabajamos habitualmente en coordinación con servicios sociales, tutores legales o familiares. Adaptamos los tiempos y el proceso a las necesidades del caso.',
      },
      {
        pregunta: '¿Qué hacéis con los objetos acumulados?',
        respuesta:
          'Separamos lo que pueda ser donado o reciclado. Los residuos orgánicos y materiales no recuperables se llevan a gestores autorizados en {provincia}.',
      },
    ],
  },

  {
    slug: 'limpieza-post-vaciado',
    nombre: 'Limpieza post vaciado',
    descripcionCorta:
      'Limpieza profunda tras el vaciado del inmueble en {ciudad}. Suelos, paredes, cocina y baños a fondo. {empresa}.',
    descripcionLarga:
      'Tras el vaciado del inmueble, {empresa} realiza una limpieza profunda en {ciudad} para dejarlo listo para visita, venta o alquiler. Limpiamos suelos, paredes, cocina, baños y cualquier rincón, eliminando polvo, manchas y residuos acumulados. Combinable con el vaciado en un único servicio con precio cerrado.',
    beneficios: [
      'Limpieza profunda de suelos, paredes y techos',
      'Cocina y baños a fondo: azulejos, sanitarios, electrodomésticos',
      'Eliminación de polvo, manchas, cal y residuos',
      'Combinable con el vaciado — un servicio, un precio',
      'Inmueble listo para visita, fotografía, venta o alquiler',
      'Equipo propio sin subcontratas en {ciudad}',
    ],
    proceso: [
      {
        titulo: 'Combinado o independiente',
        descripcion:
          'Puedes contratar la limpieza post vaciado junto con el vaciado o de forma independiente una vez el inmueble ya está vacío.',
      },
      {
        titulo: 'Limpieza de zonas secas',
        descripcion:
          'Barremos y fregamos suelos, limpiamos paredes, ventanas, marcos y puertas, y eliminamos telarañas y polvo acumulado.',
      },
      {
        titulo: 'Cocina y baños',
        descripcion:
          'Desengrasamos encimeras, azulejos y electrodomésticos. Limpiamos sanitarios, grifería y desinfectamos baños a fondo.',
      },
      {
        titulo: 'Entrega lista para usar',
        descripcion:
          'El inmueble queda limpio y en condiciones óptimas para ser visitado, fotografiado o entregado al nuevo inquilino o comprador.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Puedo contratar solo la limpieza sin el vaciado?',
        respuesta:
          'Sí. Si el inmueble ya está vacío, podemos realizar únicamente la limpieza post vaciado. Contáctanos con fotos y te damos presupuesto gratuito.',
      },
      {
        pregunta: '¿Cuánto cuesta la limpieza post vaciado en {ciudad}?',
        respuesta:
          'El precio depende del tamaño y el estado del inmueble. Un piso estándar suele estar entre 120 € y 250 €. Combinado con el vaciado obtienes un precio más ajustado.',
      },
      {
        pregunta: '¿Quedará listo para fotos inmobiliarias?',
        respuesta:
          'Sí. La limpieza post vaciado deja el inmueble en condiciones óptimas para fotografía inmobiliaria, visitas de compradores o entrega de llaves.',
      },
      {
        pregunta: '¿Limpiais también garajes y trasteros?',
        respuesta:
          'Sí. Además de viviendas y locales, limpiamos garajes, trasteros y cualquier espacio anexo que necesites dejar en perfectas condiciones en {ciudad}.',
      },
    ],
  },

  {
    slug: 'pintura-express',
    nombre: 'Pintura express',
    descripcionCorta:
      'Servicio de pintura express en {ciudad} para pisos y locales recién vaciados. Acabado profesional en 24–48 h. {empresa}.',
    descripcionLarga:
      'Con el servicio de pintura express de {empresa} en {ciudad}, pintamos pisos y locales recién vaciados en 24–48 horas con acabado profesional. Ideal para rentabilizar el inmueble lo antes posible. Combinable con el vaciado y la limpieza en un único servicio integral con precio cerrado.',
    beneficios: [
      'Acabado profesional en 24–48 horas en {ciudad}',
      'Pintura de paredes y techos con materiales de calidad',
      'Precio cerrado — sin extras ni sorpresas al finalizar',
      'Combinable con vaciado y limpieza en un servicio integral',
      'Inmueble listo para alquilar o vender en tiempo récord',
      'Equipo propio especializado en pintura de interiores',
    ],
    proceso: [
      {
        titulo: 'Presupuesto por fotos o visita',
        descripcion:
          'Envíanos fotos del inmueble vacío o concertamos una visita en {ciudad}. Te damos precio cerrado en menos de 24 horas.',
      },
      {
        titulo: 'Preparación de superficies',
        descripcion:
          'Protegemos suelos, marcos y elementos que no se pintan. Reparamos pequeños desperfectos y aplicamos imprimación si es necesario.',
      },
      {
        titulo: 'Pintura en 24–48 horas',
        descripcion:
          'Aplicamos la pintura en dos manos con rodillo profesional. En la mayoría de pisos de {ciudad} terminamos en un solo día de trabajo.',
      },
      {
        titulo: 'Entrega y revisión',
        descripcion:
          'Revisamos el acabado contigo y dejamos el inmueble limpio y listo para su uso inmediato.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta pintar un piso en {ciudad}?',
        respuesta:
          'Un piso de 70–90 m² suele costar entre 400 € y 800 € según el estado de las paredes. Pídenos presupuesto gratuito con fotos.',
      },
      {
        pregunta: '¿En cuánto tiempo pintáis un piso?',
        respuesta:
          'La mayoría de pisos estándar los pintamos en 1–2 días. Para locales o viviendas grandes, te indicamos el plazo exacto en el presupuesto.',
      },
      {
        pregunta: '¿Incluye la reparación de desperfectos en las paredes?',
        respuesta:
          'Incluimos la reparación de pequeños agujeros y grietas superficiales. Para desperfectos estructurales mayores, lo presupuestamos aparte.',
      },
      {
        pregunta: '¿Podéis combinar vaciado, limpieza y pintura?',
        respuesta:
          'Sí. Ofrecemos el servicio integral completo: vaciado + limpieza post vaciado + pintura express en {ciudad}, con un único presupuesto cerrado.',
      },
    ],
  },
];
