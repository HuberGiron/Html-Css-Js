---
layout: default
title: JavaScript - Inputs y formularios
nav_order: 1
parent: JavaScript
permalink: /docs/js/01-inputs-form/
---

# JavaScript - Inputs y formularios
Un formulario HTML captura datos del usuario y los asocia a **claves** mediante el atributo `name`. Esos datos pueden enviarse a un servidor o procesarse en el navegador con JavaScript. En esta página leerás los valores con JS, sin recargar la página, para ver exactamente qué envía cada campo.

**`name` y el envío (`submit`)**  
- Cada control debe tener **`name`**: será la **clave** tanto en el envío como en `FormData`.  
- El evento **`submit`** se dispara al hacer clic en un botón `type="submit"` o al presionar **Enter** dentro de un campo.  
- `required`, `min`, `max`, etc., activan la **validación HTML5** antes del envío real.  
- Para pruebas “sin servidor”, usa `event.preventDefault()` y lee datos con `new FormData(form)`.

**Tipos de input en este ejemplo y qué aportan**  
- **Texto (`type="text"`)**: campo genérico para cadenas cortas.  
- **Email (`type="email"`)**: valida formato básico de correo; con `required` evita envíos vacíos.  
- **Número (`type="number"`)**: agrega UI con flechas y respeta **`min`/`max`**; el valor llega como **cadena** (conviene convertir a número en JS si lo vas a calcular).  
- **Fecha (`type="date"`)**: selector nativo; el valor llega como cadena en formato estándar.  
- **Checkbox (`type="checkbox"`)**: opción booleana; **solo aparece en `FormData` si está marcado**. Si no lo está, no habrá par `name=valor`.  
- **Color (`type="color"`)**: devuelve un color `#RRGGBB`; útil para preferencias.  
- **Rango (`type="range"`)**: deslizable con `min`/`max`; el valor también es **cadena**.  
- **Select (`<select>`)**: lista desplegable; el valor es el `value` de la opción elegida.  
- **Textarea (`<textarea>`)**: multilinea para comentarios.

**Accesibilidad y usabilidad**  
- Envuelve cada control en **`<label>`** (o usa `label[for]` + `id`) para mejorar clicabilidad y lectura por **screen readers**.  
- Agrupa opciones relacionadas con **`<fieldset>`** + **`<legend>`** cuando corresponda (radios/checkboxes).  
- Usa texto de botón significativo (“Enviar”, “Guardar”), y `aria-label` si necesitas contexto extra.

**Validación HTML5 (sin JS adicional)**  
- `required` bloquea envíos vacíos.  
- `min`/`max` aplican a `number`/`range`; para `email` puedes añadir `pattern` si necesitas un formato más estricto.  
- Para **probar sin validación**, añade temporalmente `novalidate` al `<form>`.  
- Recuerda: la validación del navegador **no sustituye** la **validación en el servidor**.

**Qué hace tu JavaScript aquí**  
- Escucha `submit`, hace `preventDefault()` y construye `FormData`.  
- Recorre **[clave, valor]** para formar un objeto y lo imprime en `<pre id="salida">`.  
- Ajustes clave del ejemplo:  
  - Añade explícitamente el booleano de **`checkbox`** (`boletin`) con `form.boletin.checked` (porque si no está marcado, no aparece en `FormData`).  
  - Lee el valor de **`rango`**; conviértelo con `Number(...)` si vas a operar aritméticamente.  
- Seguridad: imprime con `textContent`, **no** con `innerHTML`, para evitar XSS si el usuario escribe HTML.

**Consejos prácticos**  
- Da valores iniciales útiles (`value`, `selected`) para mejorar la UX.  
- Mantén **nombres (`name`) estables**: si cambian, tu backend/JS puede dejar de entender la carga.  
- Cuando el formulario crezca, considera **validación personalizada** (`setCustomValidity`) o un esquema de validación en JS.  
- Si luego vas a enviar al servidor, configura `action`/`method` (`POST` para datos) o usa `fetch(formData)`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Inputs y Submit</title>
  <script defer src="../../examples/js/inputs_form.js"></script>
</head>
<body>
  <h1>Formulario de ejemplo</h1>
  <form id="demo-form">
    <label>Texto: <input type="text" name="texto" required></label><br>
    <label>Email: <input type="email" name="email" required></label><br>
    <label>Número: <input type="number" name="numero" min="0" max="100"></label><br>
    <label>Fecha: <input type="date" name="fecha"></label><br>
    <label>Checkbox: <input type="checkbox" name="boletin"> Suscribirme</label><br>
    <label>Color: <input type="color" name="color" value="#E00034"></label><br>
    <label>Rango: <input type="range" name="rango" min="0" max="10" value="5"></label><br>
    <label>Opción:
      <select name="opcion">
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
    </label><br>
    <label>Comentarios:<br>
      <textarea name="comentarios" rows="3" cols="30"></textarea>
    </label><br>
    <button type="submit">Enviar</button>
  </form>
  <pre id="salida"></pre>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/inputs_form.html' | relative_url }}" width="100%" height="520" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/inputs_form.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/inputs_form.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>

### Archivos externos de este ejemplo
**inputs_form.js**
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const f = document.getElementById('demo-form');
  const s = document.getElementById('salida');

  f.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = new FormData(f);
    const obj = {};

    for (const [k, v] of data.entries()) {
      obj[k] = v;
    }

    // Campos especiales
    obj['boletin'] = f.boletin.checked; // checkbox no aparece en FormData si está desmarcado
    obj['rango'] = f.rango.value;       // llega como cadena

    s.textContent = JSON.stringify(obj, null, 2);
  });
});
```
