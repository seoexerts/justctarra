#!/usr/bin/env node
/**
 * sync-cities.js
 * Lee todos los .json de src/data/ciudades/ (excepto ciudad-principal.json)
 * y regenera la sección de imports + rawCiudades en src/data/index.ts.
 *
 * Uso: node sync-cities.js
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, basename } from 'path';

const CIUDADES_DIR = 'src/data/ciudades';
const INDEX_FILE   = 'src/data/index.ts';
const SKIP         = ['ciudad-principal.json'];

// ── 1. Leer JSONs disponibles ─────────────────────────────────────────────────
const files = readdirSync(CIUDADES_DIR)
  .filter(f => f.endsWith('.json') && !SKIP.includes(f))
  .sort();

if (files.length === 0) {
  console.error('❌  No se encontraron JSONs en', CIUDADES_DIR);
  process.exit(1);
}

// ── 2. Generar nombre de variable por archivo ─────────────────────────────────
function toVarName(filename) {
  // sant-cugat-del-valles.json → santCugatDelVallesRaw
  return basename(filename, '.json')
    .split('-')
    .map((p, i) => i === 0 ? p : p[0].toUpperCase() + p.slice(1))
    .join('') + 'Raw';
}

const entries = files.map(f => ({
  file:    f,
  varName: toVarName(f),
  path:    `./ciudades/${f}`,
}));

// ── 3. Construir bloque de imports + array ────────────────────────────────────
const importLines = entries
  .map(e => `import ${e.varName.padEnd(28)} from '${e.path}';`)
  .join('\n');

const arrayLines = entries
  .map((e, i) => `  ${e.varName},${i === 0 ? '  // ciudad principal — primera del array' : ''}`)
  .join('\n');

const newBlock =
`// ── JSON de ciudades ──────────────────────────────────────────────────────────
// Generado automáticamente por sync-cities.js — no edites esta sección a mano
${importLines}

const rawCiudades = [
${arrayLines}
];
// ─────────────────────────────────────────────────────────────────────────────`;

// ── 4. Reemplazar sección en index.ts ─────────────────────────────────────────
const original = readFileSync(INDEX_FILE, 'utf-8');

const START = '// ── JSON de ciudades';
const END   = '// ─────────────────────────────────────────────────────────────────────────────';

const startIdx = original.indexOf(START);
const endIdx   = original.indexOf(END, startIdx) + END.length;

if (startIdx === -1 || endIdx === END.length - 1) {
  console.error('❌  No se encontraron los marcadores en', INDEX_FILE);
  console.error('    Asegúrate de que el archivo tiene el formato esperado.');
  process.exit(1);
}

const updated = original.slice(0, startIdx) + newBlock + original.slice(endIdx);
writeFileSync(INDEX_FILE, updated, 'utf-8');

// ── 5. Resumen ────────────────────────────────────────────────────────────────
console.log(`✅  index.ts actualizado con ${entries.length} ciudad(es):`);
entries.forEach((e, i) => console.log(`   ${i + 1}. ${e.file}`));
