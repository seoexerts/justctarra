/**
 * Punto de entrada único del sistema de datos.
 *
 * Para añadir ciudades secundarias:
 *   Añade un array "ciudadesSecundarias" en el JSON de la ciudad principal.
 *   Solo necesitan: nombre, slug, seoIntro, metaDesc, zonas.
 *   Heredan automáticamente: telefono, email, direccion, codigoPostal, lat, lng, provincia.
 *
 * Para añadir un servicio nuevo:
 *   1. Añade la entrada en src/data/servicios.ts.
 *   2. Referencia el slug en serviciosActivos de la ciudad principal.
 */

import { servicios as catalogoServicios } from './servicios';
import { EMPRESA } from './empresa';

// ── JSON de ciudades ──────────────────────────────────────────────────────────
// Generado automáticamente por sync-cities.js — no edites esta sección a mano
import tarragonaRaw                 from './ciudades/tarragona.json';

const rawCiudades = [
  tarragonaRaw,  // ciudad principal — primera del array
];
// ─────────────────────────────────────────────────────────────────────────────

// ── Tipos exportados ──────────────────────────────────────────────────────────
export type { FAQ, PasosProceso, ServicioBase } from './servicios';
export { EMPRESA } from './empresa';

export interface ServicioResuelto {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  beneficios: string[];
  proceso: import('./servicios').PasosProceso[];
  faqs: import('./servicios').FAQ[];
}

export interface Ciudad {
  slug: string;
  nombre: string;
  provincia: string;
  lat: number;
  lng: number;
  telefono: string;
  email: string;
  direccion: string;
  codigoPostal: string;
  zonas: string[];
  servicios: ServicioResuelto[];
  seoIntro: string;
  metaDesc: string;
}

// ── Interpolación de variables ────────────────────────────────────────────────
function interpolate(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

function interpolateDeep<T>(obj: T, vars: Record<string, string>): T {
  if (typeof obj === 'string') return interpolate(obj, vars) as unknown as T;
  if (Array.isArray(obj)) return obj.map((item) => interpolateDeep(item, vars)) as unknown as T;
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, interpolateDeep(v, vars)])
    ) as T;
  }
  return obj;
}

// ── Construir una ciudad a partir de sus datos y los datos base de la principal ──
function buildCiudad(data: any, main: any): Ciudad {
  const vars = {
    ciudad:   data.nombre,
    provincia: main.provincia,
    empresa:  EMPRESA.nombre,
  };

  const slugsActivos: string[] = data.serviciosActivos ?? main.serviciosActivos ?? [];
  const serviciosResueltos: ServicioResuelto[] = slugsActivos
    .map((slug) => catalogoServicios.find((s) => s.slug === slug))
    .filter((s): s is (typeof catalogoServicios)[number] => s !== undefined)
    .map((s) => interpolateDeep(s, vars));

  const zonasRaw = data.zonas ?? [];
  const zonas: string[] = Array.isArray(zonasRaw)
    ? zonasRaw
    : String(zonasRaw).split(',').map((z: string) => z.trim()).filter(Boolean);

  return {
    slug:         data.slug,
    nombre:       data.nombre,
    provincia:    data.provincia    ?? main.provincia,
    lat:          data.lat          ?? main.lat          ?? 0,
    lng:          data.lng          ?? main.lng          ?? 0,
    telefono:     main.telefono,
    email:        main.email,
    direccion:    main.direccion,
    codigoPostal: data.codigoPostal ?? main.codigoPostal ?? '',
    zonas,
    servicios:    serviciosResueltos,
    seoIntro:     interpolate(data.seoIntro  ?? '', vars),
    metaDesc:     interpolate(data.metaDesc  ?? '', vars),
  };
}

// ── Build de ciudades ─────────────────────────────────────────────────────────
export const ciudades: Ciudad[] = rawCiudades.flatMap((raw) => {
  const result: Ciudad[] = [];

  // Ciudad principal
  result.push(buildCiudad(raw, raw));

  // Ciudades secundarias embebidas (heredan contacto de la principal)
  const secundarias: any[] = (raw as any).ciudadesSecundarias ?? [];
  secundarias.forEach((sec) => result.push(buildCiudad(sec, raw)));

  return result;
});

// ── Helpers de navegación (para interlinking) ─────────────────────────────────

/** Misma ciudad, distintos servicios */
export function otrosServiciosEnCiudad(
  ciudadSlug: string,
  servicioSlugActual: string
): { nombre: string; slug: string; href: string }[] {
  const ciudad = ciudades.find((c) => c.slug === ciudadSlug);
  if (!ciudad) return [];
  return ciudad.servicios
    .filter((s) => s.slug !== servicioSlugActual)
    .map((s) => ({ nombre: s.nombre, slug: s.slug, href: `/${ciudadSlug}/${s.slug}/` }));
}

/** Mismo servicio en otras ciudades */
export function mismosServicioOtrasCiudades(
  servicioSlug: string,
  ciudadSlugActual: string
): { ciudad: string; slug: string; href: string }[] {
  return ciudades
    .filter((c) => c.slug !== ciudadSlugActual)
    .filter((c) => c.servicios.some((s) => s.slug === servicioSlug))
    .map((c) => ({ ciudad: c.nombre, slug: c.slug, href: `/${c.slug}/${servicioSlug}/` }));
}
