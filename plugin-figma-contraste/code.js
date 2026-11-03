// Revisor de contraste · plugin de Figma en JavaScript (sin frameworks)
// Revisa los textos de la selección (o de toda la página si no hay nada seleccionado)
// contra el primer fondo sólido que encuentra hacia arriba, y aplica 1.4.3 (4,5:1 o 3:1 si es texto grande).
figma.showUI(__html__, { width: 380, height: 520, themeColors: true });

// ── Fórmula WCAG (colores de Figma: canales de 0 a 1) ──
const lin = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const lum = ({ r, g, b }) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
function ratio(a, b) {
  // TODO 1 · devuelve el ratio WCAG: (L1 + 0,05) / (L2 + 0,05), con L1 la luminancia MÁS clara
  return 0;
}
// Mezcla un color con opacidad sobre el fondo que tiene debajo
const mezclar = (c, a, bg) => ({ r: c.r * a + bg.r * (1 - a), g: c.g * a + bg.g * (1 - a), b: c.b * a + bg.b * (1 - a) });

// Último relleno sólido visible de un nodo (el que se pinta encima), o null
function rellenoSolido(node) {
  if (!('fills' in node) || node.fills === figma.mixed || !Array.isArray(node.fills)) return null;
  const solidos = node.fills.filter((f) => f.visible !== false && f.type === 'SOLID');
  return solidos.length ? solidos[solidos.length - 1] : null;
}

// Fondo: sube por los padres hasta encontrar un relleno sólido; si no hay, blanco
function fondoDe(node) {
  let p = node.parent;
  while (p && p.type !== 'PAGE' && p.type !== 'DOCUMENT') {
    const f = rellenoSolido(p);
    if (f) return mezclar(f.color, f.opacity ?? 1, { r: 1, g: 1, b: 1 });
    p = p.parent;
  }
  return { r: 1, g: 1, b: 1 };
}

// Texto grande según WCAG: 24 px, o 18,66 px en negrita
function esTextoGrande(t) {
  // TODO 2 · usa t.fontSize y t.fontName.style (ojo: pueden ser figma.mixed)
  return false;
}

function revisar() {
  const raiz = figma.currentPage.selection.length ? figma.currentPage.selection : [figma.currentPage];
  const textos = [];
  for (const n of raiz) {
    if (n.type === 'TEXT') textos.push(n);
    if ('findAllWithCriteria' in n) textos.push(...n.findAllWithCriteria({ types: ['TEXT'] }));
  }
  const filas = [];
  for (const t of textos) {
    if (!t.visible) continue;
    const f = rellenoSolido(t);
    if (!f) { filas.push({ id: t.id, nombre: t.name, texto: t.characters.slice(0, 40), aviso: 'Varios colores o degradado: revisar a mano' }); continue; }
    const bg = fondoDe(t);
    const fg = mezclar(f.color, (f.opacity ?? 1) * t.opacity, bg);
    const r = ratio(fg, bg);
    const minimo = 4.5; // TODO 3 · 3:1 si esTextoGrande(t)
    filas.push({ id: t.id, nombre: t.name, texto: t.characters.slice(0, 40), ratio: Math.round(r * 100) / 100, minimo, ok: r >= minimo });
  }
  filas.sort((a, b) => (a.ok === b.ok ? 0 : a.ok ? 1 : -1));
  figma.ui.postMessage({ tipo: 'resultado', filas });
}

figma.ui.onmessage = async (msg) => {
  if (msg.tipo === 'revisar') revisar();
  if (msg.tipo === 'seleccionar') {
    const n = await figma.getNodeByIdAsync(msg.id);
    if (n) { figma.currentPage.selection = [n]; figma.viewport.scrollAndZoomIntoView([n]); }
  }
};
revisar();
