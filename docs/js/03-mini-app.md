---
layout: default
title: JavaScript - Mini app
nav_order: 3
parent: JavaScript
permalink: /docs/js/03-mini-app/
---

# Mini app: To-Do

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>To-Do App</title>
  <link rel="stylesheet" href="../../examples/js/todo.css">
  <script defer src="../../examples/js/todo.js"></script>
</head>
<body>
  <main class="app">
    <h1>To-Do</h1>
    <form id="todo-form">
      <input id="todo-input" placeholder="Nueva tarea…" required>
      <button>Agregar</button>
    </form>
    <ul id="todo-list"></ul>
  </main>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/todo.html' | relative_url }}" width="100%" height="440" style="border:1px solid #ddd;border-radius:8px;"></iframe>
<div style="display:flex;align-items:center;gap:12px;margin:8px 0 16px;"><a class="btn" href="{{ '/assets/zips/todo.zip' | relative_url }}">Descargar ZIP</a><img src="{{ '/assets/diagrams/todo.svg' | relative_url }}" alt="Arquitectura del ejemplo" style="max-height:140px;border:1px solid #eee;padding:4px;border-radius:6px;background:#fff;"></div>
### Archivos externos de este ejemplo
**todo.css**
```css
body{
font-family:system-ui,sans-serif;
margin:0;
padding:16px
}
.app{
max-width:520px;
margin:0 auto
}
#todo-form{
display:flex;
gap:8px
}
#todo-input{
flex:1;
padding:8px
}
#todo-list{
list-style:none;
padding-left:0;
margin-top:12px
}
.item{
display:flex;
align-items:center;
gap:8px;
padding:8px 0;
border-bottom:1px solid #eee
}
.item.done .txt{
text-decoration:line-through;
color:#777
}
.btn{
border:1px solid #ddd;
background:#f8f8f8;
padding:4px 8px;
cursor:pointer
}

```
**todo.js**
```javascript
const STORAGE_KEY='todo-items';
function loadItems(){
try{
return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]
}
catch{
return[]
}

}
function saveItems(items){
localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
}
function render(items){
const ul=document.getElementById('todo-list');
ul.innerHTML='';
items.forEach((it,idx)=>{
const li=document.createElement('li');
li.className='item'+(it.done?' done':'');
const chk=document.createElement('input');
chk.type='checkbox';
chk.checked=it.done;
const span=document.createElement('span');
span.className='txt';
span.textContent=it.text;
const del=document.createElement('button');
del.className='btn';
del.textContent='Eliminar';
chk.addEventListener('change',()=>{
it.done=chk.checked;
saveItems(items);
render(items)
}
);
del.addEventListener('click',()=>{
items.splice(idx,1);
saveItems(items);
render(items)
}
);
li.append(chk,span,del);
ul.appendChild(li)
}
)
}
document.addEventListener('DOMContentLoaded',()=>{
const items=loadItems();
render(items);
const form=document.getElementById('todo-form');
form.addEventListener('submit',ev=>{
ev.preventDefault();
const input=document.getElementById('todo-input');
items.push({
text:input.value.trim(),done:false
}
);
input.value='';
saveItems(items);
render(items)
}
)
}
);

```
