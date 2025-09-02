---
layout: default
title: HTML — Etiquetas básicas
nav_order: 1
parent: HTML
permalink: /docs/html/01-basicos
---

# HTML — Etiquetas básicas
**HTML (HyperText Markup Language)** define la **estructura** de una página.

## Párrafos (`<p>`) y encabezados (`<h1>`…`<h6>`)
```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Parrafos y encabezados</title></head>
<body>
  <h1>Título principal h1</h1>
  <h2>Subtítulo h2</h2>
  <p>Este es un párrafo de ejemplo con algo de texto.</p>
  <p>Otro párrafo. Las etiquetas dan **significado** al contenido.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/01_parrafos_encabezados.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Imágenes (`<img>`) y atributos comunes
Atributos típicos: `src`, `alt`, `width`, `height`, `title`.
```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Imagenes</title></head>
<body>
  <h1>Imagen con texto alternativo</h1>
  <img src="../../images/placeholder.png" alt="Coloca aquí una imagen propia" width="240" title="Tooltip opcional">
  <p>Reemplaza <code>placeholder.png</code> por tu imagen (PNG/JPG/SVG) en <code>assets/images/</code>.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/02_imagenes.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Hipervínculos (`<a>`)
Atributos: `href`, `target`, `rel`.
```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Links</title></head>
<body>
  <p>Visita la <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN</a>.</p>
  <p>Enlaces internos a otras páginas del sitio también usan <code>&lt;a&gt;</code>.</p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/03_links.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Tablas (`<table>`, `<tr>`, `<th>`, `<td>`)
```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Tablas</title></head>
<body>
  <h2>Tabla simple</h2>
  <table border="1">
    <tr><th>Nombre</th><th>Rol</th><th>Edad</th></tr>
    <tr><td>Ana</td><td>Frontend</td><td>28</td></tr>
    <tr><td>Luis</td><td>Backend</td><td>31</td></tr>
  </table>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/04_tablas.html' | relative_url }}" width="100%" height="240" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Cambiar propiedades con atributos de HTML
Algunas propiedades básicas pueden cambiarse con **atributos** de la etiqueta (p.ej. `width`, `height`, `border`, `bgcolor`), aunque hoy preferimos **CSS** para estilos.
```html
<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><title>Atributos basicos</title></head>
<body bgcolor="#fafafa">
  <p style="color: #E00034; width: 60%;">Este párrafo usa atributos/estilos para color y ancho.</p>
  <img src="../../images/placeholder.png" alt="..." height="120">
  <table border="1" width="50%"><tr><td>Con ancho al 50%</td></tr></table>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/05_atributos.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>