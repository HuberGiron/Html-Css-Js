document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('nombre');
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');
  btn.addEventListener('click', () => {
    const nombre = input.value.trim() || 'Mundo';
    msg.textContent = `Hola, ${nombre}!`;
  });
});
