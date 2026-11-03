# Soluciones · Sesión 6

| Archivo | Laboratorio | Qué es |
|---|---|---|
| `solucion-A-pantalla-corregida.png` | A | Captura de la pantalla de inicio corregida (también en el archivo de soluciones de Figma) |
| `solucion-C-anotada.png` | C1 | Anotación de referencia del paso 2: regiones, h1/h2, orden de foco del 1 al 21, nombres, grupo, alt y comportamiento |
| `solucion-C-320px.png` | C2 | El paso 2 programado visto a 320 px (referencia del reflow) |
| `03-paso2-handoff.html` | C (reto pro) y B3 | El paso 2 en HTML accesible a partir de la anotación, con el diálogo de salida funcionando. Comprobado: axe-core 4.14 (A y AA) 0 infracciones, sin scroll horizontal a 320 px, orden de Tab igual que la anotación, diálogo con foco atrapado y devuelto |
| `plugin-figma-contraste/` | Reserva R3 | El plugin «Revisor de contraste» completo |

## Respuestas de referencia

**A1 · las 10 barreras de la pantalla de inicio**

| # | Barrera | Criterio | Arreglo |
|---|---|---|---|
| 1 | Descripción de la cabecera #9AA5AD (2,51:1) | 1.4.3 | #46545B (7,84:1) |
| 2 | «Política de privacidad» solo por color (2,9:1 frente al texto) | 1.4.1 | Subrayado |
| 3 | Tendencia de los indicadores solo con flecha verde o roja | 1.4.1 | Flecha + «1 menos (mejora)» |
| 4 | Estado del historial solo con un punto de color | 1.4.1 | Punto + «Resuelta», «En revisión», «Enviada» |
| 5 | Etiqueta «Última: en revisión» #F08C2E sobre #FCE3CF (2,0:1) | 1.4.3 | #A74F0B (4,52:1) |
| 6 | Buscador: borde #E0E5E9 (1,27:1), marcador #C2C9CF (1,67:1), sin etiqueta | 1.4.11 · 1.4.3 · 3.3.2 | Borde #6B7880, marcador #58676F, etiqueta visible |
| 7 | Botón «Filtrar» solo con icono #8F9CA7 (2,81:1) | 1.4.11 | #374349 y texto «Filtrar» |
| 8 | Aviso de éxito: icono #22D36C (1,98:1) y «Enviada» blanco sobre #2CAA61 (2,99:1) | 1.4.11 · 1.4.3 | #1D7240 (5,94:1) |
| 9 | Párrafo en mayúsculas, justificado, 12 px, interlineado 100 % | 1.4.4 · 1.4.8 · 1.4.12 | 16 px, izquierda, 150 %, altura automática |
| 10 | Títulos de tarjeta con el mismo tamaño y peso que el texto | 1.3.1 | H2 y H3 con escala clara |

**A2 · la paleta** (`node herramientas/contraste.mjs`): 5 de 17 parejas no cumplen. Tokens a cambiar: `base-border-level-3` y `base-border-overlay-2` → #6B7880, `feedback-icon-success-emphasis` y `feedback-bg-success-solid` → #1D7240. Con esos cuatro cambios queda 1 fallo: el separador decorativo de las migas de pan, que no necesita cumplir.

**B3 · ficha del diálogo:** `<dialog>` con `showModal()` · nombre: su título (`aria-labelledby`) · foco inicial en «Permanecer aquí» · Tab y Mayús + Tab atrapados · Esc = permanecer · al cerrar, foco al botón «Cancelar» · «Salir sin guardar» como secundario · cerrar de 44 × 44 con `aria-label="Cerrar"`.

**C3 · las 6 preguntas:** 1) botones «Ayuda», «Notificaciones» y «NA, menú de usuario» (el nombre contiene «NA»: 2.5.3) · 2) h1 «Reporta una denuncia»; h2 «Describe tu denuncia» y «Tu denuncia es confidencial» · 3) Cancelar y Siguiente al final, después de Atrás · 4) sí: `fieldset` con `legend` «Frecuencia y precedentes de los hechos» · 5) `alt=""`, decorativa · 6) abre un diálogo de fecha; Esc lo cierra y devuelve el foco (o un `<input type="date">` nativo).
