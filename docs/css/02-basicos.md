---
layout: default
title: CSS - Colores, tipografías y tamaños
nav_order: 2
parent: CSS
permalink: /docs/css/02-basicos/
---

# CSS - Colores, tipografías y tamaños

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Colores y fuentes</title>
  <link rel="stylesheet" href="../../examples/css/04_colores_fuentes.css">
</head>
<body>
  <h1>Estilos base</h1>
  <p>Texto</p>
  <p class="importante">Importante</p>
  <p class="muted">Atenuado</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/css/04_colores_fuentes.html' | relative_url }}" width="100%" height="240" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/04_colores_fuentes.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/04_colores_fuentes.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
**04_colores_fuentes.css**
```css
:root{
--color-primario:#E00034;
--gris:#666
}
body{
font-family:system-ui,sans-serif;
line-height:1.6;
padding:16px
}
h1{
font-size:1.6rem
}
.importante{
color:var(--color-primario);
font-weight:700
}
.muted{
color:var(--gris)
}

```
