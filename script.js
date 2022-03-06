const cartaTexto = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const randomClass = [];

function 

function generatorLetter() {
  const addText = cartaTexto.value;
  const createSpan = document.createElement('span');
  createSpan.innerText = addText;
  cartaGerada.appendChild(createSpan);

  if (cartaTexto.value === ' ') {
    createSpan.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

criarCarta.addEventListener('click', generatorLetter);
