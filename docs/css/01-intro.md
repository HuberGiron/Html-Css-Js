---
layout: default
title: CSS - Inline vs Internal vs External
nav_order: 1
parent: CSS
permalink: /docs/css/01-intro/
---

# CSS - Inline vs Internal vs External
CSS define la **presentación** (colores, tamaños, espaciado, layout) y se aplica siguiendo la **cascada**: cuando varias reglas afectan al mismo elemento, gana (1) la de **mayor especificidad**, (2) si empatan, la que aparece **más tarde** en la carga, y (3) si aún empatan, la que el navegador considere por **herencia/valor por defecto**.

**Especificidad (simplificada):**
- Inline (`style="..."`) → muy alta (evítalo para estilos habituales).
- `#id` > `.clase`, `[atributo]`, `:hover` > `h1`, `p`, `::before`.
- `!important` “salta la fila”: úsalo solo como último recurso.

**Buenas prácticas:** usa **clases** para estilado, evita IDs para estilo, minimiza `!important`, separa **estructura (HTML)**, **presentación (CSS)** y **comportamiento (JS)**.

## Inline

**Inline** (atributo `style="..."`) es la forma más directa de aplicar estilo a un elemento concreto. Ventaja: no requiere archivos adicionales ni orden de carga. Desventajas: **difícil de mantener**, no se **reutiliza**, **rompe** el flujo normal de la cascada (especificidad muy alta) y llena el HTML de detalles visuales.

**Úsalo solo para:**
- Prototipos rápidos o ejemplos didácticos.
- Valores **dinámicos** que JS genera en tiempo real (p. ej., `style="--progress: 62%"`).
- Casos puntuales (emails HTML, integración de terceros) donde no controlas el pipeline.

Para todo lo demás, prefiere reglas en una **hoja de estilos** o, si es una página aislada, en un bloque **internal**.

```html
<p style="color:#E00034; font-weight:bold;">Texto rojo (inline)</p>
```
<iframe src="{{ '/assets/examples/css/01_inline.html' | relative_url }}" width="100%" height="160" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/01_inline.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/01_inline.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Internal

**Internal** (`<style>` en el `<head>`) centraliza estilos de **una sola página**. Es útil cuando el ejemplo vive en una página aislada o quieres “empaquetar” todo en un archivo HTML (como demos y documentación).

**Ventajas:** lectura rápida del ejemplo, sin archivos externos.  
**Contras:** no se **cachea** entre páginas, y si el proyecto crece tendrás que **duplicar** estilos.

**Consejos:**
- Declara un **ámbito** para evitar choques: por ejemplo, envolver la página con `<main class="demo-internal">` y prefijar reglas `.demo-internal h1 { ... }`.
- Si necesitas **CSS crítico** (lo que debe pintarse lo antes posible), puedes incluir una porción aquí e ir migrando el resto a archivos externos conforme crezca el proyecto.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Internal CSS</title>

  <style>
    body { font-family: system-ui,
     sans-serif; }
    h1 { color: #333; }
    .caja { background: #f0f0f0;
     padding: 12px;
     border-radius: 8px; }
  </style>

</head>
<body>
  <h1>Internal CSS</h1>
  <div class="caja">Bloque con fondo gris</div>
</body>
</html>
```
<iframe src="{{ '/assets/examples/css/02_internal.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/02_internal.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/02_internal.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## External

**External** (archivo `.css` enlazado con `<link rel="stylesheet" href="...">`) es la forma estándar en proyectos reales: separa responsabilidades, permite **caché** del navegador y facilita escalar el código.

**Ventajas:** mantenimiento, reutilización y rendimiento (caché).  
**Contras:** requiere cuidar **rutas** y **orden de carga** (lo último en cargarse gana a igualdad de especificidad).

**Consejos de organización:**
- Carpeta `assets/css/` para estilos globales y un CSS por componente/módulo cuando sea necesario.
- Carga primero **reset/normalización**, luego **variables/utilidades**, después **componentes** y al final **overrides**.
- En sitios Jekyll/Just the Docs, usa `{{ '/assets/css/archivo.css' | relative_url }}` para evitar roturas de ruta con `baseurl`.
- Evita encadenar selectores muy largos; prioriza **clases** claras (p. ej., estilo BEM o utilidades).
- Cuando el sitio crezca, considera **minificar** y **agrupar** los CSS para producción.

**03_external.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>External CSS</title>
  <link rel="stylesheet" href="../../examples/css/03_external.css">
</head>
<body>
  <h1>External CSS</h1>
  <p class="nota">Estilo desde archivo CSS externo</p>
</body>
</html>
```
**03_external.css**
```css
body{
font-family:system-ui,sans-serif
}
h1{
color:#1a1a1a
}
.nota{
background:#fff0f3;
border-left:4px solid #E00034;
padding:8px 12px
}
```
<iframe src="{{ '/assets/examples/css/03_external.html' | relative_url }}" width="100%" height="200" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/03_external.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/03_external.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>

