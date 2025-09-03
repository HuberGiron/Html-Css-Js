
---
layout: default
title: HTML - Etiquetas básicas
nav_order: 1
parent: HTML
permalink: /docs/html/01-basicos
---

# HTML - Etiquetas básicas

## Párrafos y encabezados
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Párrafos y encabezados</title>
</head>
<body>
  <h1>Título principal h1</h1>
  <h2>Subtítulo h2</h2>
  <p>Este es un párrafo de ejemplo con algo de texto.</p>
  <p>Otro párrafo.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/01_parrafos_encabezados.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/01_parrafos_encabezados.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/01_parrafos_encabezados.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Imágenes
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Imágenes</title>
</head>
<body>
  <h1>Imagen con alt</h1>
  <img src="../../images/placeholder.png" alt="Coloca tu imagen" width="240">
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/02_imagenes.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/02_imagenes.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/02_imagenes.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Hipervínculos
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Links</title>
</head>
<body>
  <p>Visita <a href="https://developer.mozilla.org/" target="_blank">MDN</a>.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/03_links.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/03_links.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/03_links.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Tablas
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Tablas</title>
</head>
<body>
  <h2>Tabla simple</h2>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Rol</th>
      <th>Edad</th>
    </tr>
    <tr>
      <td>Ana</td><td>Frontend</td><td>28</td>
    </tr>
    <tr>
      <td>Luis</td><td>Backend</td><td>31</td>
    </tr>
  </table>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/04_tablas.html' | relative_url }}" width="100%" height="240" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/04_tablas.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/04_tablas.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Atributos básicos
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Atributos</title>
</head>
<body bgcolor="#fafafa">
  <p style="color:#E00034; width:60%;">Texto con color y ancho.</p>
  <img src="../../images/placeholder.png" alt="..." height="120">
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/05_atributos.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/05_atributos.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/05_atributos.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
