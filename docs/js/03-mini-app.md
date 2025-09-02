---
layout: default
title: JavaScript — Mini app
nav_order: 3
parent: JavaScript
permalink: /docs/js/03-mini-app
---

# JavaScript — Mini app: Lista de tareas (To‑Do)
Pequeña app que permite **agregar**, **marcar como hecho** y **eliminar** tareas. Demuestra manejo de DOM, eventos y almacenamiento local.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>To‑Do App</title>
  <link rel="stylesheet" href="../../examples/js/todo.css">
  <script defer src="../../examples/js/todo.js"></script>
</head>
<body>
  <main class="app">
    <h1>To‑Do</h1>
    <form id="todo-form">
      <input id="todo-input" placeholder="Nueva tarea…" required>
      <button>Agregar</button>
    </form>
    <ul id="todo-list"></ul>
  </main>
</body>
</html>
```
<iframe src="{{ '/assets/examples/js/todo.html' | relative_url }}" width="100%" height="420" style="border:1px solid #ddd;border-radius:8px;"></iframe>