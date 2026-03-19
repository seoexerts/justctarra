/**
 * llms-full.txt — Versión extendida para LLMs con todo el contenido del sitio
 * Incluye: descripciones largas, beneficios, proceso paso a paso y FAQs completas
 *
 * Accesible en: /llms-full.txt
 * Versión resumida: /llms.txt
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
  lines.push(`# ${EMPRESA.nombre} — Contenido completo`);
  lines.push('');
  lines.push(`> ${EMPRESA.descripcion}`);
  lines.push('');
  lines.push(
    `Este documento contiene toda la información sobre ${EMPRESA.nombre}, ` +
    `especialistas en ${siteConfig.serviceType} en ${siteConfig.mainCity} y provincia de ${ciudadPrincipal?.provincia ?? ''}. ` +
    `Municipios cubiertos: ${todasCiudades}.`
  );
  lines.push('');

  // ── Datos empresa ─────────────────────────────────────────────────────────
  lines.push('## Datos de la empresa');
  lines.push('');
  lines.push(`- **Nombre:** ${EMPRESA.nombre}`);
  lines.push(`- **Razón social:** ${EMPRESA.nombreLegal}`);
  lines.push(`- **CIF:** ${EMPRESA.cif}`);
  lines.push(`- **Teléfono:** ${siteConfig.phone}`);
  lines.push(`- **WhatsApp:** https://wa.me/${siteConfig.whatsapp}`);
  lines.push(`- **Email:** ${siteConfig.email}`);
  lines.push(`- **Web:** ${web}`);
  lines.push(`- **Horario de atención:** ${EMPRESA.horarioTexto}`);
  lines.push(`- **Área de servicio:** ${siteConfig.area}`);
  lines.push(`- **Fundación:** ${siteConfig.foundingYear}`);
  lines.push(`- **Valoración:** ${siteConfig.aggregateRating.ratingValue}/5 (${siteConfig.aggregateRating.reviewCount} reseñas)`);
  lines.push('');

  // ── Catálogo de servicios completo ────────────────────────────────────────
  lines.push('## Catálogo completo de servicios');
  lines.push('');

  serviciosUnicos.forEach((s) => {
    const ciudad = siteConfig.mainCity;
    const provincia = ciudadPrincipal?.provincia ?? '';
    const empresa = EMPRESA.nombre;
    const interp = (t: string) =>
      t.replace(/\{ciudad\}/g, ciudad).replace(/\{provincia\}/g, provincia).replace(/\{empresa\}/g, empresa);

    lines.push(`### ${s.nombre}`);
    lines.push('');
    lines.push(`**URL:** ${web}/${ciudadPrincipal?.slug ?? 'ciudad'}/${s.slug}/`);
    lines.push('');
    lines.push('**Descripción:**');
    lines.push(interp(s.descripcionLarga));
    lines.push('');

    if (s.beneficios.length > 0) {
      lines.push('**Beneficios y ventajas:**');
      s.beneficios.forEach((b) => lines.push(`- ${interp(b)}`));
      lines.push('');
    }

    if (s.proceso.length > 0) {
      lines.push('**Proceso de trabajo:**');
      s.proceso.forEach((p, i) => {
        lines.push(`${i + 1}. **${interp(p.titulo)}**: ${interp(p.descripcion)}`);
      });
      lines.push('');
    }

    if (s.faqs.length > 0) {
      lines.push('**Preguntas frecuentes:**');
      s.faqs.forEach((f) => {
        lines.push('');
        lines.push(`**P: ${interp(f.pregunta)}**`);
        lines.push(`R: ${interp(f.respuesta)}`);
      });
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  });

  // ── Municipios y zonas ────────────────────────────────────────────────────
  lines.push('## Municipios con páginas de servicio');
  lines.push('');
  ciudades.forEach((c) => {
    lines.push(`### ${c.nombre}`);
    lines.push('');
    lines.push(c.seoIntro || `Servicios de ${siteConfig.serviceType} en ${c.nombre}.`);
    lines.push('');
    if (c.zonas.length > 0) {
      lines.push(`**Barrios y zonas atendidas:** ${c.zonas.join(', ')}`);
      lines.push('');
    }
    lines.push('**Páginas disponibles:**');
    lines.push(`- [${c.nombre} — inicio](${web}/${c.slug}/)`);
    c.servicios.forEach((s) => {
      lines.push(`- [${s.nombre} en ${c.nombre}](${web}/${c.slug}/${s.slug}/)`);
    });
    lines.push('');
  });

  // ── Mapa de navegación ────────────────────────────────────────────────────
  lines.push('## Mapa completo del sitio');
  lines.push('');
  lines.push(`- [Inicio](${web}/)`);
  lines.push(`- [Servicios](${web}/servicios/)`);
  lines.push(`- [Sobre nosotros](${web}/sobre-nosotros/)`);
  lines.push(`- [Contacto](${web}/contacto/)`);
  lines.push(`- [FAQ](${web}/faq/)`);
  lines.push(`- [Aviso legal](${web}/aviso-legal/)`);
  lines.push(`- [Privacidad](${web}/privacidad/)`);
  lines.push(`- [Sitemap XML](${web}/sitemap-index.xml)`);
  lines.push(`- [llms.txt resumido](${web}/llms.txt)`);
  lines.push('');

  const content = lines.join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
