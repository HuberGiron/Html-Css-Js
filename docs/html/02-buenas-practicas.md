---
layout: default
title: HTML - Estructura HTML5
nav_order: 2
parent: HTML
permalink: /docs/html/02-buenas-practicas/
---

# HTML - Estructura HTML5

La **estructura HTML5** define zonas semánticas claras del documento para que navegadores, lectores de pantalla y motores de búsqueda entiendan **qué es** cada parte (no solo cómo se ve). Con una buena semántica, mejoras **accesibilidad**, **SEO** y **mantenibilidad** del código.

### Anatomía mínima del documento
- `<!DOCTYPE html>`: indica a los navegadores que deben interpretar el documento como **HTML5**.
- `<html lang="es">`: establece el **idioma** del contenido; clave para accesibilidad y SEO.
- `<head>`: contiene **metadatos** (ej. `<meta charset="utf-8">` para caracteres en español, `<title>` para el título de la pestaña, favicon, etc.).
- `<body>`: todo el **contenido visible** y las zonas semánticas principales.

> Sugerencia móvil: añade `<meta name="viewport" content="width=device-width, initial-scale=1">` para un buen rendering en pantallas pequeñas.

### Zonas semánticas (landmarks) más comunes
- `<header>`: cabecera del **sitio** o de una **sección**. Suele llevar el nombre del sitio, logotipo o encabezado principal.
- `<nav>`: **navegación** principal o local. Coloca aquí menús con enlaces; generalmente una lista `<ul>` con ítems `<li>` y enlaces `<a>`.
- `<main>`: el **contenido principal** único de la página (solo uno por documento).
- `<section>`: agrupa contenido relacionado con un **título** propio (por ejemplo, un bloque temático del artículo).
- `<article>`: contenido **independiente y reutilizable** (una entrada de blog, una noticia, una tarjeta de producto).
- `<aside>`: contenido **complementario** (barras laterales, bloques de recomendaciones, notas).
- `<footer>`: información de pie de página (derechos, enlaces legales, contacto) a nivel de sitio o de una sección.

### `section` vs `article` vs `div`
- Usa **`section`** cuando el bloque tenga un **encabezado** y represente un **tema** dentro del documento.
- Usa **`article`** si ese bloque podría **vivir por sí mismo** (por ejemplo, copiado a un feed).
- Usa **`div`** para agrupaciones **no semánticas** (cuando ninguna etiqueta semántica encaja). Luego aplica clases para estilos.

### Encabezados (`h1`–`h6`) y jerarquía
- Debe existir un **`h1` principal** que describa el tema de la página.
- Estructura subsecciones con `h2`, `h3`, … sin **saltar niveles** arbitrariamente.
- Los encabezados **no son** para “hacer grande el texto”; el **tamaño** lo decide **CSS**.

### Accesibilidad pragmática
- Asegura un orden lógico de encabezados y landmarks: ayuda a **navegar con teclado/lector**.
- En `nav`, si existen **varias** barras de navegación, diferencia con texto visible (p. ej., “Navegación principal”, “Navegación secundaria”) o un `aria-label`.
- Enlaces con **texto significativo** (“Ir a inicio”, “Ver artículos”), no “clic aquí”.
- Imágenes con `alt` **descriptivo** cuando aportan información.

### Buenas prácticas que evitan problemas
- **Separa responsabilidades**: estructura en HTML, estilos en CSS, comportamiento en JS.
- Evita “divitis”: prefiere etiquetas **semánticas** cuando existen.
- Mantén URLs limpias y consistentes; cuida enlaces relativos.
- Revisa que solo exista **un `<main>`** y que `header`/`footer` se usen donde corresponda (pueden repetirse por sección si tiene sentido).

### Errores comunes a evitar
- Usar `section` sin **encabezado** (mejor un `div` si no hay título).
- Abusar de `article` para cualquier bloque que **no** es independiente.
- Meter el menú en `header` pero **fuera** de `nav` (pierdes semántica de navegación).
- Reemplazar estructura con estilos inline: complica el mantenimiento y la accesibilidad.


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
      <p>Contenido principal...</p>
    </section>
  </main>
  <footer>footer ©</footer>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/06_semantica.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/06_semantica.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/06_semantica.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
