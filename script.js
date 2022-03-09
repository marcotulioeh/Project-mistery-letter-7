const cartaTexto = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
const counter = document.getElementById('counter');

const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotate = ['rotateleft', 'rotateright'];
const groupSkew = ['skewleft', 'skewright'];

function randomClass() {
  const styleIndex = Math.floor(Math.random() * groupStyle.length);
  const arrStyle = groupStyle[styleIndex];
  const sizeIndex = Math.floor(Math.random() * groupSize.length);
  const arrSiza = groupSize[sizeIndex];
  const rotateIndex = Math.floor(Math.random() * groupRotate.length);
  const arrRotate = groupRotate[rotateIndex];
  const skewIndex = Math.floor(Math.random() * groupSkew.length);
  const arrSkew = groupSkew[skewIndex];
  return `${arrStyle} ${arrSiza} ${arrRotate} ${arrSkew}`;
}
console.log(randomClass());

function createLetter() {
  cartaGerada.innerHTML = '';
  const textWrapping = document.getElementById('carta-texto').value.split(' ');

  textWrapping.forEach((element) => {
    const createSpan = document.createElement('span');
    createSpan.className = randomClass();
    createSpan.innerText = element;
    cartaGerada.appendChild(createSpan);
  });
}

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value === '' || cartaTexto.value === ' ') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    return createLetter();
  }
});

cartaGerada.addEventListener('click', () => {
  const span = document.querySelector('span');
  span.className = randomClass();
});

function countWords() {
  if (cartaTexto.value !== '') {
    cartaContador.innerText = cartaTexto.value.split(' ').length;
  } else {
    cartaContador.innerText = '0';
  }
}

