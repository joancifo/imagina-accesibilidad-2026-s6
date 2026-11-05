# Laboratorio C · Estructura, orden, reflow y handoff

> **Hoy, jueves 5 de noviembre, lo hacemos todos juntos (8 minutos)**: toda la clase hace de desarrollo y responde por el chat las 6 preguntas de C3 sobre el paso 2. **En casa**, en vuestra copia: C1 (anotar con el kit) y C2 (reflow a 320 px). C3 se puede hacer con un compañero, intercambiando capturas.

**Guía completa: 30 minutos · tema 5** (orden de lectura y de foco, navegación con teclado, reflow, imágenes y alternativas, anotaciones y handoff, colaboración)

| Etapa | Qué hacéis | Minutos | Casillas |
|---|---|---|---|
| **C1** · Anotar | El paso 2 con el kit: regiones, encabezados, foco, nombres, grupo, alt y comportamiento | 0 – 14 | 6 |
| **C2** · Reflow | El paso 2 rediseñado en el lienzo de 320 px | 14 – 24 | 4 |
| **C3** · Handoff | Otro grupo hace de desarrollo con vuestra anotación | 24 – 30 | 3 |

> **La pantalla.** *C · Paso 2 · Describe tu denuncia*, en la sección C. Tiene cabecera con tres iconos, menú lateral, título, pasos, el formulario y una columna de ayuda con una ilustración. Visualmente está bien. Lo que le falta es **todo lo que no se ve**.

---

## C1 · Anotar (14 minutos)

Pilota quien no ha pilotado todavía. Usad el **kit de anotaciones** de la sección *0 · Empieza aquí* (panel Recursos → Local, o copiar y pegar). Poned las anotaciones **fuera** de los marcos con auto layout para que no se descoloquen.

| Anotación | Qué marcar en el paso 2 |
|---|---|
| **Región** | header, nav (con nombre), main, form, aside |
| **Encabezado** | El h1 y los h2 (¿cuántos hay?) |
| **Orden de foco** | Numerad del 1 al último todo lo que recibe el foco. Ojo: ¿«Siguiente» va antes o después de los campos? |
| **Nombre accesible** | Los tres iconos de la cabecera y la flecha de volver |
| **Grupo** | Las tres opciones de «Frecuencia y precedentes» |
| **Texto alternativo** | La ilustración: ¿informa o decora? |
| **Comportamiento** | El icono del calendario y el contador «0 / 2000» |

> **Pista:** el avatar muestra «NA». Su nombre accesible tiene que **contener** ese texto visible (2.5.3, nombre en la etiqueta).

**Casillas C1**
- [ ] Regiones (5)
- [ ] h1 y h2
- [ ] Orden de foco completo y coherente
- [ ] Nombres de los iconos
- [ ] Grupo y texto alternativo
- [ ] Comportamiento del calendario y del contador

---

## C2 · Reflow a 320 px (10 minutos)

Rotad roles. En el marco *Móvil 320 × 900*:

1. Copiad los bloques del paso 2 y **apiladlos en una columna**. Nada puede salirse del marco (1.4.10).
2. Decidid qué va primero: ¿el formulario o la columna de ayuda?
3. El menú lateral: ¿se pliega en un botón «Menú» o pasa a una línea arriba?
4. Los botones, a todo el ancho y en el orden de lectura (Atrás, Cancelar, Siguiente).

> **Pista:** 320 px es lo que ve alguien que hace zoom al 400 % en una pantalla de 1280. Si el texto no cabe, la caja tiene que crecer (altura automática), no cortarse.

**Casillas C2**
- [ ] Todo en una columna dentro de 320 px
- [ ] Orden de los bloques decidido y anotado
- [ ] Menú resuelto
- [ ] Botones a todo el ancho y en orden

---

## C3 · Handoff: otro grupo hace de desarrollo (6 minutos)

1. **Portavoz:** pegad en el chat general el enlace de vuestra copia (en lectura basta) o una captura de la anotación, para el **grupo siguiente**: G1 → G2 → G3 → G4 → G5 → G1.
2. Abrid la anotación del grupo anterior y contestad las **6 preguntas** del marco amarillo *C3 · Preguntas del grupo que hace de desarrollo*, **solo con lo que dicen sus anotaciones**.
3. Si no podéis contestar una, escribid en el chat qué anotación le falta al otro grupo.

**Casillas C3**
- [ ] Enlace o captura compartidos
- [ ] 6 preguntas contestadas sobre la anotación del otro grupo
- [ ] Una anotación que faltaba, comunicada en el chat

**Reto pro (+3):** 🔵 para quien programa: `ejemplos/03-paso2-handoff.html` es el paso 2 maquetado «a ojo»: se ve igual, pero no funciona con teclado ni con lector. Resolved los **17 TODO** con vuestra anotación. Comprobad con Tab, con el lector, con F12 → Lighthouse y a 320 px (F12 → modo dispositivo). Solución: `soluciones/03-paso2-handoff.html`.

---

## Al terminar

En el chat general: `Grupo N · C1 X/6 · C2 X/4 · C3 X/3 + retos` y, del grupo que hizo de desarrollo, **una pregunta que no pudieron responder**.
