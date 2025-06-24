# Plan para UI de Cards

Este documento resume los pasos para implementar un conjunto de tarjetas inspiradas en `inspirations/card-grid.png` utilizando Web Components.

## Checklist general

- [ ] Analizar la imagen de referencia `inspirations/card-grid.png`.
- [ ] Definir tokens de diseño y variables CSS.
- [ ] Expandir el componente `<ui-card>`.
- [ ] Crear el componente `<card-grid>`.
- [ ] Actualizar `index.html` con ejemplos.
- [ ] Mejorar interacciones y responsividad.
- [ ] Probar y ajustar el resultado final.

## Tareas a ejecutar

1. **Analizar la referencia**
   ```
   Describe la disposición, colores y tipografía de `inspirations/card-grid.png`. Identifica patrones o estilos recurrentes para replicarlos.
   ```
2. **Definir design tokens**
   ```
   A partir de la imagen de referencia, crea propiedades CSS (colores, espaciados, fuentes, sombras) e incorpóralas en `public/styles/colors.css` y `public/styles/spacing.css`.
   ```
3. **Extender `ui-card`**
   ```
   Modifica `src/components/molecules/UiCard.ts` y `public/styles/ui-card.css` para igualar la estructura de la tarjeta de la imagen. Añade slots para cabecera, imagen o botones de acción si es necesario.
   ```
4. **Crear grid de tarjetas**
   ```
   Implementa un componente `<card-grid>` que distribuya varias `<ui-card>` siguiendo la misma retícula (columnas, separación) mostrada en la captura.
   ```
5. **Actualizar `index.html`**
   ```
   Inserta el nuevo `<card-grid>` en `index.html` y poblalo con tarjetas de ejemplo, reflejando la disposición de la imagen de referencia.
   ```
6. **Pulir interacciones y responsividad**
   ```
   Añade efectos hover, transiciones y puntos de quiebre para que las tarjetas se comporten como en el diseño en distintas resoluciones.
   ```
7. **Probar e iterar**
   ```
   Visualiza el sitio con `npm run dev`. Compara el resultado con `inspirations/card-grid.png` y ajusta estilos hasta que coincidan.
   ```
