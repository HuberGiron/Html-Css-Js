---
layout: default
title: CSS — Inline vs Internal vs External
nav_order: 1
parent: CSS
permalink: /docs/css/01-intro
---

# CSS — Inline vs Internal vs External

## Inline (en la etiqueta)
Útil para pruebas rápidas, **no** recomendado a escala.
```html
<p style="color:#E00034; font-weight:bold;">Texto rojo y en negritas (inline)</p>
```
<iframe src="{{ '/assets/examples/css/01_inline.html' | relative_url }}" width="100%" height="160" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Internal (en `<style>` dentro del `<head>`)
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Internal CSS</title>
  <style>
    body { font-family: system-ui, sans-serif; }
    h1 { color: #333; }
    .caja { background:#f0f0f0; padding:12px; border-radius:8px; }
  </style>
</head>
<body>
  <h1>Internal CSS</h1>
  <div class="caja">Bloque con fondo gris y bordes redondeados.</div>
</body>
</html>
```
<iframe src="{{ '/assets/examples/css/02_internal.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## External (archivo `.css` separado)
Mejor para proyectos reales. Reutilizable y fácil de mantener.
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
  <p class="nota">Este párrafo está estilizado desde un archivo CSS externo.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/css/03_external.html' | relative_url }}" width="100%" height="200" style="border:1px solid #ddd;border-radius:8px;"></iframe>