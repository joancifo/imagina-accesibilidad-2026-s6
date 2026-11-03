#!/usr/bin/env node
// Comprueba el contraste de las parejas de tokens declaradas en contraste.config.json.
// Uso:   node herramientas/contraste.mjs [ruta/a/tokens.css]
// Sale con código 1 si alguna pareja no cumple: se puede poner en el pipeline de GitHub Actions
// de la sesión anterior (un paso más: `node herramientas/contraste.mjs src/styles/tokens.css`).
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const rutaTokens = process.argv[2] ?? join(aqui, 'tokens.css');
const config = JSON.parse(readFileSync(join(aqui, 'contraste.config.json'), 'utf8'));
const css = readFileSync(rutaTokens, 'utf8');

// 1 · Leer los tokens: --nombre: valor;
const tokens = {};
for (const [, nombre, valor] of css.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) tokens[nombre] = valor.trim();

// 2 · Pasar un valor CSS a [r, g, b, a] (hexadecimal o rgba)
function aRgba(valor) {
  const v = valor.trim();
  if (v.startsWith('#')) {
    const h = v.slice(1);
    const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)).concat(1);
  }
  const m = v.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const [r, g, b, a = 1] = m[1].split(',').map((x) => parseFloat(x));
    return [r, g, b, a];
  }
  throw new Error(`No sé leer el color «${valor}»`);
}

// 3 · Un color con transparencia se mezcla con el fondo que tiene debajo
function mezclar([r, g, b, a], [R, G, B]) {
  return [r * a + R * (1 - a), g * a + G * (1 - a), b * a + B * (1 - a)];
}

// 4 · Luminancia relativa y ratio WCAG
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const MINIMO = { texto: 4.5, 'texto-grande': 3, grafico: 3 };
const color = (n) => { if (!(n in tokens)) throw new Error(`Falta el token --${n}`); return aRgba(tokens[n]); };

let fallos = 0;
const filas = config.parejas.map(({ primerPlano, fondo, uso, nota }) => {
  const bg = mezclar(color(fondo), [255, 255, 255]);
  const fg = mezclar(color(primerPlano), bg);
  const r = ratio(fg, bg);
  const ok = r >= MINIMO[uso];
  if (!ok) fallos++;
  return { pareja: `${primerPlano} / ${fondo}`, uso, ratio: r.toFixed(2) + ':1', minimo: MINIMO[uso] + ':1', resultado: ok ? 'cumple' : 'NO CUMPLE', nota: nota ?? '' };
});
console.table(filas);
console.log(fallos ? `\n${fallos} pareja(s) no cumplen.` : '\nTodas las parejas cumplen.');
process.exit(fallos ? 1 : 0);
