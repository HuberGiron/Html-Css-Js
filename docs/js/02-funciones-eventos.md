---
layout: default
title: JavaScript — Variables, funciones y eventos
nav_order: 2
parent: JavaScript
permalink: /docs/js/02-funciones-eventos
---

# JavaScript — Variables, funciones y eventos

## Variables y funciones
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Funciones y Variables</title>
  <script defer src="../../examples/js/funciones_vars.js"></script>
</head>
<body>
  <h1>Funciones y Variables</h1>
  <button id="btn-saludo">Saludar</button>
  <div id="log"></div>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/funciones_vars.html' | relative_url }}" width="100%" height="240" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Eventos y DOM (interactividad)
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Eventos DOM</title>
  <script defer src="../../examples/js/dom_eventos.js"></script>
</head>
<body>
  <h1>Eventos DOM</h1>
  <input id="nombre" type="text" placeholder="Escribe tu nombre">
  <button id="btn">Decirme hola</button>
  <p id="msg"></p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/dom_eventos.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>