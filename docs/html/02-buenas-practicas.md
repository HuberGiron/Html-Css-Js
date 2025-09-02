---
layout: default
title: HTML — Buenas prácticas
nav_order: 2
parent: HTML
permalink: /docs/html/02-buenas-practicas
---

# HTML — Buenas prácticas
- Usa `<!DOCTYPE html>` y `lang` correcto.
- Incluye `<meta charset="utf-8">` y títulos descriptivos.
- Evita atributos de estilo en HTML; **usa CSS**.
- Usa etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) cuando corresponda.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Semántica básica</title>
</head>
<body>
  <header><h1>Mi sitio</h1></header>
  <nav><a href="#">Inicio</a> · <a href="#">Blog</a></nav>
  <main>
    <section>
      <h2>Artículo</h2>
      <p>Contenido principal…</p>
    </section>
  </main>
  <footer>© 2025</footer>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/06_semantica.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>