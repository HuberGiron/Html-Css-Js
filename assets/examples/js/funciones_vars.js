const log = (msg) => {
  const el = document.getElementById('log');
  const p = document.createElement('p');
  p.textContent = msg;
  el.appendChild(p);
};

document.addEventListener('DOMContentLoaded', () => {
  let contador = 0;                   // variable
  function saludar(nombre='Mundo') {  // función
    contador++;
    return `Hola, ${nombre}! (#${contador})`;
  }
  document.getElementById('btn-saludo').addEventListener('click', () => {
    log(saludar('Huber'));
  });
});
