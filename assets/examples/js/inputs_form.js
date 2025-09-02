document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demo-form');
  const salida = document.getElementById('salida');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const obj = {};
    for (const [k, v] of data.entries()) { obj[k] = v; }
    obj['boletin'] = form.boletin.checked;
    obj['rango'] = form.rango.value;
    salida.textContent = JSON.stringify(obj, null, 2);
  });
});
