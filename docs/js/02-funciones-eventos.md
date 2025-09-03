---
layout: default
title: JavaScript - Variables, funciones y eventos
nav_order: 2
parent: JavaScript
permalink: /docs/js/02-funciones-eventos/
---

# JavaScript - Variables, funciones y eventos

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
  <div id="log" style="margin-top:10px;"></div>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/funciones_vars.html' | relative_url }}" width="100%" height="260" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/funciones_vars.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/funciones_vars.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
**funciones_vars.js**
```javascript
const log=msg=>{
const el=document.getElementById('log');
const p=document.createElement('p');
p.textContent=msg;
el.appendChild(p)
}
;
document.addEventListener('DOMContentLoaded',()=>{
let contador=0;
function saludar(nombre='Mundo'){
contador++;
return `Hola, ${
nombre
}
! (#${
contador
}
)`
}
document.getElementById('btn-saludo').addEventListener('click',()=>{
log(saludar('Huber'))
}
)
}
);

```


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
<iframe src="{{ '/assets/examples/js/dom_eventos.html' | relative_url }}" width="100%" height="280" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/dom_eventos.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/dom_eventos.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
**dom_eventos.js**
```javascript
document.addEventListener('DOMContentLoaded',()=>{
const input=document.getElementById('nombre');
const btn=document.getElementById('btn');
const msg=document.getElementById('msg');
btn.addEventListener('click',()=>{
const nombre=input.value.trim()||'Mundo';
msg.textContent=`Hola, ${
nombre
}
!`;

}
);

}
);

```
