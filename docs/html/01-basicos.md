---
layout: default
title: HTML - Etiquetas básicas
nav_order: 1
parent: HTML
permalink: /docs/html/01-basicos/
---

# HTML - Etiquetas básicas

## Estructura Básica
La estructura mínima de una página HTML define **qué** es el documento y **cómo** debe interpretarlo el navegador. `<!DOCTYPE html>` indica HTML5; `<html lang="es">` mejora accesibilidad y SEO (Search Engine Optimization) al declarar el idioma. En `<head>` van metadatos (por ejemplo, `<meta charset="utf-8">` para caracteres en español y `<title>` para el texto de la pestaña del navegador). En `<body>` colocas el **contenido visible**.

**Buenas prácticas**: añade `<meta name="viewport" content="width=device-width, initial-scale=1">` para móviles, y separa responsabilidades: **estructura (HTML)**, **presentación (CSS)** y **comportamiento (JS)**.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Título página</title>
  </head>
  <body>
  </body>
</html>
```
<iframe src="{{ '/assets/examples/html/00_estructura.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>

## Párrafos y encabezados

Los encabezados `h1`–`h6` definen la **jerarquía** del contenido (no son para “hacer más grande” el texto; eso es tarea de CSS). Lo habitual es **un `h1` por página** (tema principal) y luego `h2`, `h3`, etc. para subsecciones. Los `p` agrupan frases en **párrafos semánticos**.

Mantener esta jerarquía ayuda a la **accesibilidad** (lectores de pantalla) y al **SEO**. Evita usar saltos de línea manuales para espaciar: controla el espaciado con CSS, no duplicando etiquetas ni usando `<br>` indiscriminadamente.

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
<iframe src="{{ '/assets/examples/html/01_parrafos.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>

<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;">
  <a class="btn" href="{{ '/assets/zips/01_parrafos_encabezados.zip' | relative_url }}">Descargar ZIP</a>
  <img src="{{ '/assets/diagrams/01_parrafos.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;">
</div>


## Imágenes

La etiqueta `img` inserta imágenes y debe incluir siempre `alt` **descriptivo** por accesibilidad y SEO. Controla dimensiones con `width`/`height` o (mejor) con CSS para mantener proporciones y evitar reflow. Organiza tus recursos en carpetas (p. ej., `assets/images/`) y usa rutas relativas consistentes.

Para rendimiento, considera formatos comprimidos (WebP/JPEG) y especifica dimensiones cuando sea posible.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Imágenes</title>
</head>
<body>
  <h1>Imagen</h1>
  <img src="ibero.png" width="240">
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/02_imagenes.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/02_imagenes.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/02_imagenes.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Hipervínculos

Los enlaces se crean con `a href="..."`. Para abrir en nueva pestaña, usa `target="_blank"` **junto con** `rel="noopener noreferrer"` por seguridad. El **texto del enlace** debe ser significativo (p. ej., “Ver página Ibero”) en lugar de “clic aquí”; eso mejora accesibilidad y claridad.

Puedes usar rutas **absolutas** (`https://...`) para sitios externos o **relativas** (`/ruta`, `./archivo`) para páginas internas según tu estructura. Mantén una convención de enlaces para reducir roturas al reorganizar archivos.


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Links</title>
</head>
<body>
  <p>Visita 
    <a href="https://ibero.mx/">IBERO</a>
  </p>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/03_links.html' | relative_url }}" width="100%" height="220" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/03_links.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/03_links.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Tablas

Las tablas están pensadas para **datos tabulares**, no para maquetación. Usa `th` para encabezados de columnas/filas y considera `caption` y `scope="col|row"` para accesibilidad. En tablas grandes, `thead`, `tbody` y `tfoot` mejoran semántica y facilitan el estilado.

Controla bordes, alineaciones y espaciado con **CSS** en lugar de atributos como `border`. Así mantienes el HTML limpio y puedes cambiar estilos sin tocar la estructura.

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
      <td>Ana</td>
      <td>Frontend</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Luis</td>
      <td>Backend</td>
      <td>31</td>
    </tr>
  </table>
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/04_tablas.html' | relative_url }}" width="100%" height="240" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/04_tablas.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/04_tablas.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>


## Atributos básicos

Los atributos configuran propiedades de las etiquetas (p. ej., `src`, `alt`, `width`, `height`). Aunque existen atributos “históricos” como `bgcolor`, en HTML5 se prefiere mover **todo el estilo** a CSS. Usa unidades coherentes (`px`, `%`, `rem`) y verifica que cada atributo corresponda a la etiqueta (`alt` solo tiene sentido en `img`, etc.).

En este ejemplo se emplea `bgcolor` en `body` a modo ilustrativo; en un proyecto real, aplicaría el color de fondo con CSS para mantener el HTML **semántico** y fácil de mantener.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Atributos</title>
</head>
<body bgcolor="#999897f2">
  <p style="color:#E00034; width:60%;">Texto con color y ancho.</p>
  <img src="ibero.png" height="120px">
</body>
</html>
```
<iframe src="{{ '/assets/examples/html/05_atributos.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>

<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;">
  <a class="btn" href="{{ '/assets/zips/05_atributos.zip' | relative_url }}">Descargar ZIP</a>
  <br>
  <img src="{{ '/assets/diagrams/05_atributos.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;">
</div>
