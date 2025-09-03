
---
layout: default
title: CSS - Inline vs Internal vs External
nav_order: 1
parent: CSS
permalink: /docs/css/01-intro
---

# CSS - Inline vs Internal vs External

## Inline
```html
<p style="color:#E00034; font-weight:bold;">Texto rojo (inline)</p>
```
<iframe src="{{ '/assets/examples/css/01_inline.html' | relative_url }}" width="100%" height="160" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/01_inline.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/01_inline.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Internal
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Internal CSS</title>
  <style>
    body { font-family: system-ui, sans-serif; }
    h1 { color: #333; }
    .caja { background: #f0f0f0; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>Internal CSS</h1>
  <div class="caja">Bloque con fondo gris</div>
</body>
</html>
```
<iframe src="{{ '/assets/examples/css/02_internal.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/02_internal.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/02_internal.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## External
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
<iframe src="{{ '/assets/examples/css/03_external.html' | relative_url }}" width="100%" height="200" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/03_external.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/03_external.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
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
