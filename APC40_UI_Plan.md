# Plan para interfaz web APC40

Este documento resume los pasos para crear una interfaz web del controlador APC40 utilizando WebComponents y Atomic Design.

## Checklist general

- [ ] Revisar las imágenes de referencia `apc40/ref-image.png` y `apc40/regions.png`.
- [ ] Definir los estilos base y variables CSS.
- [ ] Implementar componentes **Átomo**:
  - [ ] `PadButton`
  - [ ] `KnobControl`
  - [ ] `FaderControl`
  - [ ] `LedIndicator`
  - [ ] `LabelText`
- [ ] Implementar **Moléculas**:
  - [ ] `ClipGrid`
  - [ ] `KnobBank`
  - [ ] `FaderBank`
  - [ ] `TransportControls`
- [ ] Implementar **Organismos**:
  - [ ] `APCTrackSection`
  - [ ] `APCMasterSection`
  - [ ] `APCClipSection`
- [ ] Crear plantilla `APC40Template` posicionando los organismos según `regions.png`.
- [ ] Crear página `public/apc40.html` para cargar la plantilla.
- [ ] Documentar brevemente la correspondencia entre regiones y componentes.

## Tareas a ejecutar

Cada tarea puede utilizarse como prompt o checklist para ir avanzando en la implementación.

1. **Configurar estilos globales**
   ```
   Diseña un esquema de colores y variables CSS basados en las imágenes de referencia.
   Aplica estas variables en `public/style.css` o en los estilos de los componentes.
   ```
2. **Crear átomos**
   ```
   Implementa en `src/components/atoms` los WebComponents `PadButton`, `KnobControl`,
   `FaderControl`, `LedIndicator` y `LabelText` con sus estilos y atributos básicos.
   ```
3. **Construir moléculas**
   ```
   Combina los átomos para formar `ClipGrid`, `KnobBank`, `FaderBank` y
   `TransportControls` dentro de `src/components/molecules`.
   ```
4. **Definir organismos**
   ```
   Crea `APCTrackSection`, `APCMasterSection` y `APCClipSection` en
   `src/components/organisms`, agrupando las moléculas correspondientes.
   ```
5. **Ensamblar plantilla y página**
   ```
   Implementa `APC40Template` (en `src/components/templates`) que coloque las secciones
   según la distribución de `regions.png`. Añade `public/apc40.html` para cargar la UI
   resultante.
   ```
6. **Documentar**
   ```
   Escribe un README o comentario explicando cómo cada región de `regions.png` se
   relaciona con los componentes creados.
   ```
