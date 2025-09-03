---
layout: default
title: HTML - Buenas prácticas
nav_order: 2
parent: HTML
permalink: /docs/html/02-buenas-practicas/
---

# HTML - Buenas prácticas

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Semántica</title>
</head>
<body>
  <header><h1>Mi sitio</h1></header>
  <nav>…</nav>
  <main>
    <section>
      <h2>Artículo</h2>
      <p>Contenido…</p>
    </section>
  </main>
  <footer>©</footer>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/06_semantica.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/06_semantica.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/06_semantica.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
