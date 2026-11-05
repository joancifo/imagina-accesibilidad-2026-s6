# Laboratorio A · Color, contraste y tipografía

**15 minutos en las salas · por grupos · tema 5** (responsabilidad del diseño, contraste de color, tipografía accesible, uso del color)

> **Hoy, jueves 5 de noviembre:** en la sala hacemos **A1** (minutos 0 – 13) y, si os sobra tiempo, empezáis **A2**. **A2 y A3 se terminan en casa**, en vuestra copia de Figma: son avance del proyecto final.

| Etapa | Qué hacéis | Minutos | Casillas |
|---|---|---|---|
| **A1** · Encontrar | Las 10 barreras de la pantalla de inicio, a la hoja amarilla | 0 – 13 (en la sala) | 5 |
| **A2** · Medir | La paleta real del proyecto: 10 parejas, ratio y uso | 13 – 15 · en casa | 4 |
| **A3** · Arreglar | Corregir la pantalla en vuestra copia | En casa (≈ 15 min) | 5 |

> **La pantalla.** *A · Canal de denuncias (inicio)*, en la sección A de la página 🧪 Sesión 6 · Laboratorio. Es la portada del canal: cabecera, aviso de éxito, «Sobre el canal», «Mis denuncias» con tres indicadores y el historial. Se ve bien en un monitor bueno… y tiene **10 barreras** de color y texto.

---

## A1 · Encontrar (13 minutos, en la sala)

Pilota quien menos haya usado Figma.

1. **Persona usuaria (2 min):** mira la pantalla con el zoom al 50 % (`Mayús + 1` y después aleja). ¿Qué se lee peor? ¿Qué información solo te da un color?
2. **Todo el grupo:** recorred la pantalla de arriba abajo. Para cada cosa sospechosa, medid el contraste (selector de color → *Check color contrast*) y apuntadla en la **hoja amarilla** *A1 · Hoja de hallazgos*: qué veis, quién se queda fuera, criterio y arreglo.
3. **Auditoría:** usad la tabla de criterios de abajo.

| Criterio | Qué buscar |
|---|---|
| 1.4.3 · AA | Texto con menos de 4,5:1 (o de 3:1 si es grande: 24 px, o 18,66 px en negrita) |
| 1.4.11 · AA | Iconos que informan, bordes de controles o partes de gráficos con menos de 3:1 |
| 1.4.1 · A | Información que **solo** da el color |
| 1.4.4 · 1.4.8 · 1.4.12 | Texto muy pequeño, en mayúsculas, justificado o con poco interlineado |
| 1.3.1 · A | Algo que es un título pero no lo parece (o al revés) |

> **Pista:** hay 2 de contraste de texto, 3 de uso del color, 2 de elementos que no son texto (en uno, su texto también está flojo), 1 aviso que cae en dos criterios y 2 de tipografía.

**Casillas A1**
- [ ] Hoja con al menos 6 barreras
- [ ] Hoja con las 10 barreras
- [ ] Cada barrera con su criterio
- [ ] Cada barrera con «quién se queda fuera»
- [ ] Una frase del grupo en el chat: «La barrera que más gente sufre es… porque…»

**Retos (+2 c/u)**
- 🟢 *Sin programar:* plugin **Color Blind** sobre la pantalla: ¿qué información desaparece con deuteranopia?
- 🔵 *Para quien programa:* abre `ejemplos/01-contraste-tokens.html` y comprueba con la «prueba libre» tres colores de la pantalla.

---

## A2 · Medir la paleta (10 minutos · si sobra tiempo o en casa)

Rotad roles. Marco *A2 · La paleta real del proyecto*: diez parejas de colores sacadas de `src/styles/tokens.css`.

1. En cada fila, seleccionad la capa **«Aa»** y medid el contraste en el selector de color.
2. Escribid el ratio y si pasa como **texto normal** (4,5:1) y como **texto grande o gráfico** (3:1).
3. Decidid en la última columna **para qué** se puede usar esa pareja («texto secundario», «solo decoración», «no usar en bordes de campo»…).

**Casillas A2**
- [ ] 10 ratios apuntados
- [ ] Las dos columnas de «pasa / no pasa» rellenas
- [ ] Columna «¿Para qué lo usarías?» rellena
- [ ] El caso del anillo de foco sobre el botón azul: ¿por qué da 1:1 y cómo se arregla?

> **Pista:** en Figma, el comprobador toma como fondo lo que hay debajo de la capa. Si el número no os cuadra, comprobad que habéis seleccionado la capa de texto y no el marco.

**Reto (+2):** 🔵 en el archivo del curso, `herramientas/contraste.mjs` hace lo mismo con todo `tokens.css`: `node herramientas/contraste.mjs`. ¿Coinciden vuestros números?

---

## A3 · Arreglar (en casa, unos 15 minutos)

Rotad roles. En **vuestra copia**, corregid la pantalla. Empezad por lo que es un clic.

| Si encontrasteis… | Arreglo |
|---|---|
| Texto gris con poco contraste | Un gris del proyecto que cumpla: `#46545B` (7,84:1) |
| Enlace solo por color | Subrayado (panel de texto → decoración) |
| Tendencia o estado solo por color | Añadid texto: «1 menos (mejora)», «En revisión» |
| Bordes o iconos con poco contraste | `#6B7880` (4,54:1) o `#374349` (10,19:1) |
| Verde claro del aviso | `#1D7240` (5,94:1) |
| Párrafo en mayúsculas, justificado, 12 px | Caja normal, a la izquierda, 16 px, interlineado 150 % y altura automática |
| Títulos que no lo parecen | Space Grotesk 20 negrita para los títulos de tarjeta (h2) |

**Casillas A3**
- [ ] Contraste de texto corregido (2)
- [ ] Uso del color corregido (3)
- [ ] Elementos que no son texto corregidos (2)
- [ ] Tipografía y jerarquía corregidas (2)
- [ ] El aviso de éxito corregido

**Retos (+2 c/u)**
- 🟢 Cread **variables de color** (panel derecho sin nada seleccionado → *Variables locales*) con los cuatro colores nuevos y aplicadlas. Así se arregla el token, no la pantalla.
- 🔵 Para quien programa: escribid en la hoja los cambios de `tokens.css` que propondríais (token, valor actual, valor nuevo y ratio).

---

## Al terminar

En el chat general: `Grupo N · A1 X/5 · A2 X/4 · A3 X/5 + retos` y una frase: **¿qué barrera os ha sorprendido más?**
