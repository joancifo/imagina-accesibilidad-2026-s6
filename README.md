# Sesión 6 · Diseño inclusivo, Figma y experiencia de usuario

**Accesibilidad Web WCAG 2.2 para Desarrolladores React y Angular · Joan Cifo · Imagina Formación**
Miércoles 4 de noviembre · 15:00 – 18:30 · Tema 5 del temario

Hoy se trabaja en **Figma** sobre pantallas del **Canal de denuncias** (el proyecto final). No hay código obligatorio; los retos para quien programa son en HTML y JavaScript, sin frameworks.

## Empieza aquí

1. Lee `laboratorios/00-como-trabajamos.md`.
2. Abre el archivo de Figma (enlace en `figma/enlaces.md`) y **duplícalo**.
3. Sigue las guías `laboratorios/laboratorio-A.md`, `-B.md` y `-C.md`.

## Contenido

| Carpeta o archivo | Qué hay |
|---|---|
| `laboratorios/` | Cómo trabajamos y las guías de los laboratorios A, B y C |
| `figma/enlaces.md` | Enlaces al archivo del laboratorio y descripción de cada sección |
| `ejemplos/01-contraste-tokens.html` | Los colores reales de `tokens.css` medidos con la fórmula WCAG y una prueba libre |
| `ejemplos/02-foco-y-objetivos.html` | Demo con Tab: anillo de foco pegado y separado, borde de campo 1,27:1 y 4,54:1, objetivos de 16, 24 y 44 px |
| `ejemplos/03-paso2-handoff.html` | Reto pro: el paso 2 maquetado «a ojo», con 17 TODO |
| `herramientas/contraste.mjs` | `node herramientas/contraste.mjs [ruta/a/tokens.css]`: comprueba 17 parejas de tokens; sale con código 1 si alguna falla (para CI) |
| `plugin-figma-contraste/` | Reserva R3: plugin de Figma «Revisor de contraste» en JavaScript (3 TODO). Se importa en Figma de escritorio: Plugins → Desarrollo → Importar plugin desde manifiesto |
| `soluciones/` | Soluciones y respuestas de referencia |

Todo lo que es HTML se abre con Live Server o directamente en el navegador. `contraste.mjs` necesita Node 18 o posterior.
