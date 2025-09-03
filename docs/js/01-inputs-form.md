
---
layout: default
title: JavaScript - Inputs y formularios
nav_order: 1
parent: JavaScript
permalink: /docs/js/01-inputs-form
---

# JavaScript - Inputs y formularios

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
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/inputs_form.zip' | relative_url }}">Descargar ZIP del ejemplo</a><img src="{{ '/assets/diagrams/inputs_form.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
**inputs_form.js**
```javascript
document.addEventListener('DOMContentLoaded',()=>{
const f=document.getElementById('demo-form');
const s=document.getElementById('salida');
f.addEventListener('submit',ev=>{
ev.preventDefault();
const data=new FormData(f);
const obj={

}
;
for(const[k,v]of data.entries()){
obj[k]=v
}
obj['boletin']=f.boletin.checked;
obj['rango']=f.rango.value;
s.textContent=JSON.stringify(obj,null,2);

}
);

}
);

```
