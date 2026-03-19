/**
 * llms.txt — Estándar de descubrimiento para modelos de lenguaje (LLMs)
 * Referencia: https://llmstxt.org
 *
 * Accesible en: /llms.txt
 * Para versión completa con todo el contenido: /llms-full.txt
 */
import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { ciudades, EMPRESA } from '../data/index';

export const GET: APIRoute = () => {
  const web = siteConfig.web.replace(/\/$/, '');
  const ciudadPrincipal = ciudades[0];
  const todasCiudades = ciudades.map((c) => c.nombre).join(', ');
  const serviciosUnicos = Array.from(
    new Map(
      ciudades.flatMap((c) => c.servicios).map((s) => [s.slug, s])
    ).values()
  );

  const lines: string[] = [];

  // ── Cabecera ──────────────────────────────────────────────────────────────
  lines.push(`# ${EMPRESA.nombre}`);
  lines.push('');
  lines.push(`> ${EMPRESA.descripcion}`);
  lines.push('');
  lines.push(
    `${EMPRESA.nombre} es una empresa especializada en **${siteConfig.serviceType}** ` +
    `con sede en ${siteConfig.mainCity} (${ciudadPrincipal?.provincia ?? ''}). ` +
    `Ofrecemos servicio profesional en ${todasCiudades} y toda la provincia. ` +
    `Fundada en ${siteConfig.foundingYear}. Valoración media: ${siteConfig.aggregateRating.ratingValue}/5 ` +
    `basada en ${siteConfig.aggregateRating.reviewCount} reseñas verificadas.`
  );
  lines.push('');

  // ── Contacto ──────────────────────────────────────────────────────────────
  lines.push('## Contacto y datos de la empresa');
  lines.push('');
  lines.push(`- **Nombre comercial:** ${EMPRESA.nombre}`);
  lines.push(`- **Nombre legal:** ${EMPRESA.nombreLegal}`);
  lines.push(`- **CIF:** ${EMPRESA.cif}`);
  lines.push(`- **Teléfono:** ${siteConfig.phone}`);
  lines.push(`- **WhatsApp:** https://wa.me/${siteConfig.whatsapp}`);
  lines.push(`- **Email:** ${siteConfig.email}`);
  lines.push(`- **Web:** ${web}`);
  lines.push(`- **Horario:** ${EMPRESA.horarioTexto}`);
  lines.push(`- **Zona de servicio:** ${siteConfig.area}`);
  if (siteConfig.social.facebook) lines.push(`- **Facebook:** ${siteConfig.social.facebook}`);
  if (siteConfig.social.instagram) lines.push(`- **Instagram:** ${siteConfig.social.instagram}`);
  if (siteConfig.social.linkedin) lines.push(`- **LinkedIn:** ${siteConfig.social.linkedin}`);
  lines.push('');

  // ── Servicios ─────────────────────────────────────────────────────────────
  lines.push('## Servicios que ofrecemos');
  lines.push('');
  lines.push(
    `Especializados en ${siteConfig.serviceType} para particulares, comunidades de vecinos, ` +
    `inmobiliarias, gestorías y administraciones de fincas en ${siteConfig.mainCity} y provincia.`
  );
  lines.push('');
  serviciosUnicos.forEach((s) => {
    lines.push(`### ${s.nombre}`);
    lines.push('');
    lines.push(s.descripcionCorta.replace(/\{ciudad\}/g, siteConfig.mainCity).replace(/\{empresa\}/g, EMPRESA.nombre).replace(/\{provincia\}/g, ciudadPrincipal?.provincia ?? ''));
    lines.push('');
    lines.push(`- [Ver servicio en ${siteConfig.mainCity}](${web}/${ciudadPrincipal?.slug ?? 'barcelona'}/${s.slug}/)`);
    lines.push('');
  });

  // ── Ciudades ──────────────────────────────────────────────────────────────
  lines.push('## Ciudades y municipios donde trabajamos');
  lines.push('');
  lines.push(
    `Prestamos servicio de ${siteConfig.serviceType} en los siguientes municipios:`
  );
  lines.push('');
  ciudades.forEach((c) => {
    const serviciosPrincipal = c.servicios.map((s) => s.nombre).join(', ');
    lines.push(`### ${c.nombre} (${c.provincia})`);
    lines.push('');
    lines.push(`Servicios disponibles: ${serviciosPrincipal}`);
    if (c.zonas.length > 0) {
      lines.push(`Barrios y zonas: ${c.zonas.join(', ')}`);
    }
    lines.push(`- [Página de ${c.nombre}](${web}/${c.slug}/)`);
    c.servicios.forEach((s) => {
      lines.push(`- [${s.nombre} en ${c.nombre}](${web}/${c.slug}/${s.slug}/)`);
    });
    lines.push('');
  });

  // ── Páginas principales ───────────────────────────────────────────────────
  lines.push('## Páginas principales');
  lines.push('');
  lines.push(`- [Inicio](${web}/)`);
  lines.push(`- [Todos los servicios](${web}/servicios/)`);
  lines.push(`- [Sobre nosotros](${web}/sobre-nosotros/)`);
  lines.push(`- [Contacto](${web}/contacto/)`);
  lines.push(`- [Preguntas frecuentes](${web}/faq/)`);
  lines.push(`- [Aviso legal](${web}/aviso-legal/)`);
  lines.push(`- [Política de privacidad](${web}/privacidad/)`);
  lines.push('');

  // ── Versión completa ───────────────────────────────────────────────────────
  lines.push('## Recursos para LLMs');
  lines.push('');
  lines.push(`- [Versión completa con FAQs y descripciones detalladas](${web}/llms-full.txt)`);
  lines.push(`- [Sitemap XML](${web}/sitemap-index.xml)`);
  lines.push('');

  const content = lines.join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
