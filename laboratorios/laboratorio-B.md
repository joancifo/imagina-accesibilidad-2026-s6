# Laboratorio B · Estados, foco, objetivos y componentes

**33 minutos · por grupos · tema 5** (estados, indicadores de foco, tamaño de los objetivos, formularios, componentes complejos, variantes y documentación en Figma)

| Etapa | Qué hacéis | Minutos | Casillas |
|---|---|---|---|
| **B1** · Componentes | Foco, pulsado, deshabilitado y error; la descripción de cada componente | 0 – 14 | 5 |
| **B2** · Objetivos | Iconos de 44 × 44 y casilla de 20 px con la fila clicable | 14 – 19 | 3 |
| **B3** · Paso 1 | El formulario «Identifícate» corregido y la ficha del diálogo | 19 – 33 | 6 |

> **Lo que hay en la sección B.** El marco *B1 · Componentes del proyecto (incompletos)* con los conjuntos **Botón** (solo «Por defecto» y «Hover»), **Campo de texto** (sin etiqueta y con un error que es solo un borde rojo), **Botón de icono** (16 × 16) y **Casilla** (12 × 12). La pantalla *B · Paso 1 · Identifícate*, hecha con esos componentes. Y a la derecha, un tooltip, un desplegable abierto, el diálogo de salida y la ficha amarilla para documentarlo.

---

## B1 · Completar los componentes (14 minutos)

Pilota quien no ha pilotado todavía.

**Botón** — añadid las variantes que faltan, en «Primario» y en «Secundario»:

| Variante | Cómo dibujarla |
|---|---|
| `Estado=Foco` | Anillo de **2 px** `#0725D0` **separado 2 px** del botón (un marco exterior con relleno de 2 px y borde de 2 px). Así se ve también sobre el botón azul. |
| `Estado=Pulsado` | Fondo más oscuro (`#061A8F` en el primario) |
| `Estado=Deshabilitado` | Gris legible: texto `#46545B` sobre `#E7EBEE`. Nada de opacidad al 30 %. |

> **Pista:** para que el tamaño no cambie entre variantes, dad a **todas** el mismo marco exterior de 2 px de relleno y poned el borde solo en «Foco».

**Campo de texto** — rehacedlo:
- Etiqueta **visible encima** (`Email (obligatorio)`), en una propiedad de texto.
- Ayuda visible debajo de la etiqueta.
- Borde `#6B7880` (4,54:1).
- `Estado=Foco`: borde de 2 px `#0725D0` + anillo.
- `Estado=Error`: borde `#C01111` de 2 px **+ icono + mensaje** que diga cómo corregir: «Falta el dominio. Ejemplo: mariagr@email.com».
- `Estado=Deshabilitado`.

**Descripción** — seleccionad cada componente **principal** y escribid en *Descripción* del panel derecho: el HTML, el teclado, el foco y los atributos (`aria-invalid`, `aria-describedby`…). Usad la plantilla de la ficha «Plantilla: la descripción accesible de un componente».

**Casillas B1**
- [ ] Botón: Foco con anillo separado
- [ ] Botón: Pulsado y Deshabilitado legible
- [ ] Campo: etiqueta, ayuda y borde 3:1
- [ ] Campo: Foco y Error con icono y mensaje
- [ ] Descripción escrita en Botón y en Campo

**Reto (+2):** 🟢 añadid al campo una **propiedad booleana** «Con ayuda» que muestre u oculte la ayuda.

---

## B2 · Objetivos (5 minutos)

Rotad roles.

1. **Botón de icono:** el marco de cada variante a **44 × 44** con el icono de **20 px** centrado. Usad la plantilla de medida de la sección 0 · Empieza aquí.
2. **Casilla:** caja de **20 × 20** y toda la fila (caja + texto) como objetivo de al menos 44 px de alto.
3. Comprobad el resultado en la pantalla del paso 1: las instancias cambian solas.

**Casillas B2**
- [ ] Iconos de 44 × 44 (mínimo AA: 24 × 24)
- [ ] Casilla de 20 px y fila clicable
- [ ] Cada icono con su nombre accesible en la descripción (Cerrar, Eliminar, Elegir fecha, Ayuda)

---

## B3 · El paso 1 y el diálogo (14 minutos)

Rotad roles. En la pantalla *B · Paso 1 · Identifícate*, arreglad **8 barreras**:

| # | Pista |
|---|---|
| 1 | ¿Dónde está la etiqueta de cada campo cuando ya has escrito? |
| 2 | ¿Qué significa el asterisco rojo? ¿Lo dice algún sitio? |
| 3 | El email está mal. ¿Cómo lo sabe alguien que no distingue el rojo? ¿Y qué tiene que hacer? |
| 4 | La ayuda del número de documento solo sale al pasar el ratón por el «?» |
| 5 | La casilla mide 12 × 12 |
| 6 | ¿Cuál es el paso actual si no ves colores? |
| 7 | «Siguiente» está gris y no dice por qué |
| 8 | «Cancelar» es un texto gris de 12 px |

Después, rellenad la **ficha amarilla del diálogo** (*B3 · Documenta el comportamiento del diálogo*): adónde va el foco al abrir, qué pasa con Tab y con Esc, adónde vuelve el foco al cerrar, su nombre accesible y qué botón es el destructivo.

**Casillas B3**
- [ ] Etiquetas visibles y leyenda del asterisco
- [ ] Error del email con icono y mensaje
- [ ] Ayuda del documento visible (sin tooltip)
- [ ] Paso actual con texto
- [ ] «Siguiente» activo y «Cancelar» como botón
- [ ] Ficha del diálogo completa

**Retos (+2 c/u)**
- 🟢 Corregid el **desplegable abierto**: la opción elegida, con un icono de check y no solo con un fondo azul claro.
- 🔵 Para quien programa: abrid `soluciones/03-paso2-handoff.html`, pulsad «Cancelar» y comprobad con el teclado que el diálogo hace lo que dice vuestra ficha.

---

## Al terminar

En el chat general: `Grupo N · B1 X/5 · B2 X/3 · B3 X/6 + retos` y una frase: **¿qué estado os ha costado más dibujar?**
