/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 19/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'JUSTC TARRA',
  businessNameLegal: 'JUSTC TARRA',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Vaciado de pisos y locales',
  area:         'Tarragona, municipios cercanos y todo Catalunya',
  mainCity:     'Tarragona',
  comarca:      'Tarragonés',
  foundingYear: '2018',

  // ── Contacto ──────────────────────────────────────────
  phone:    '602365996',
  email:    'info@justclean.es',
  whatsapp: '602365996',
  web:      'https://justclean.es',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Sa 09:00-20:00',
  horarioTexto: 'Lunes a Sábado, 9:00–20:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: '¿Vaciado de piso o local en Tarragona? JC Tarragona te ofrece un servicio rápido, profesional y económico. ¡Solicita tu presupuesto! | 602365996',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  22,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#c4f21c',
  colorText:    '#0f172a',

  // ── Diseño visual ─────────────────────────────────────
  fontFamily:  'Inter',
  designStyle: 'rounded',
  brandIcon:   '✦',
  mapZoom:     15,

  // ── SEO avanzado ──────────────────────────────────────
  titleFormula: 4,
  schemaType:  'MovingCompany',
  // sectionOrder: orden y visibilidad de secciones en la home
  sectionOrder: ["servicios","zona","proceso","precios","beneficios","faq","testimonios"] as string[],

  // ── Navegación ────────────────────────────────────────
  navAbout:    'Sobre nosotros',
  navFaq:      'Preguntas',
  navCta:      'PEDIR PRESUPUESTO',
  navCtaShort: 'PEDIR',
  navCtaEmoji: '📋',

  // ── Enlaces externos ──────────────────────────────────
  externalLink1: { url: 'https://maps.app.goo.gl/9u5tMrCJgCBKFeMU8', anchor: 'Empresa especializada en vaciado de pisos y locales', rel: 'follow' },
  externalLink2: { url: 'https://www.justclean.es/', anchor: '© 2026 JustClean Tarragona', rel: 'follow' },

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '"VecKxVtQt7zzzW_RNZbxeAsYQ66Ih20xCXJu00z2fAA" />',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
