const STORAGE_KEY = 'todo-items';

function loadItems() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveItems(items) { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }

function render(items) {
  const ul = document.getElementById('todo-list');
  ul.innerHTML = '';
  items.forEach((it, idx) => {
    const li = document.createElement('li');
    li.className = 'item' + (it.done ? ' done' : '');
    const chk = document.createElement('input'); chk.type = 'checkbox'; chk.checked = it.done;
    const span = document.createElement('span'); span.className = 'txt'; span.textContent = it.text;
    const del = document.createElement('button'); del.className = 'btn'; del.textContent = 'Eliminar';
    chk.addEventListener('change', () => { it.done = chk.checked; saveItems(items); render(items); });
    del.addEventListener('click', () => { items.splice(idx,1); saveItems(items); render(items); });
    li.append(chk, span, del);
    ul.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const items = loadItems();
  render(items);
  const form = document.getElementById('todo-form');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const input = document.getElementById('todo-input');
    items.push({ text: input.value.trim(), done: false });
    input.value='';
    saveItems(items); render(items);
  });
});
