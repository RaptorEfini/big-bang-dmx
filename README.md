# Big Bang DMX

Este proyecto implementa una maqueta de la superficie de control **Akai APC40** utilizando Web Components y el enfoque de Atomic Design.

En la carpeta `apc40` se incluye la imagen `regions.png` donde se ilustran las áreas principales del controlador. Cada región se corresponde con un organismo dentro de la plantilla `APC40Template`:

| Región en `regions.png` | Componente Web | Descripción |
| ----------------------- | -------------- | ----------- |
| **Track section**       | `<apc-track-section>` | Contiene un banco de `knob-control` y un banco de `fader-control` que representan los ocho potenciómetros y faders de canal. |
| **Clip section**        | `<apc-clip-section>`  | Alberga la grilla de lanzamiento de clips implementada con `clip-grid`, un conjunto de 5 filas por 8 columnas de `pad-button`. |
| **Master section**      | `<apc-master-section>`| Incluye los `transport-controls` que agrupan botones como Play, Stop y Record. |

La disposición de estos organismos dentro de `APC40Template` se define por CSS Grid (ver `public/styles/apc40-template.css`), asignando a cada uno un área de la cuadrícula que corresponde a las zonas indicadas en `regions.png`.

Para ver la plantilla en acción puede abrirse `public/apc40.html` en un navegador después de construir el proyecto con `npm run build` o ejecutando `npm run dev` para desarrollo.

