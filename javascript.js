const inicioLi = document.getElementById('inicioLi');
const contactoLi = document.getElementById('contactoLi');
const inicio = document.getElementById('inicio')
const contacto = document.getElementById('contacto')
const portfolioLi = document.getElementById('portfolioLi');
const portfolio = document.getElementById('portfolio');


inicioLi.addEventListener('click', verInicio);
contactoLi.addEventListener('click', verContacto);
portfolioLi.addEventListener('click',verPortfolio)

function quitarDiv() {
    inicio.className = 'invisible'
    contacto.className = 'invisible'
    portfolio.className = 'invisible'
}

function verInicio() {
    quitarDiv()
    inicio.className += 'visible';
}

function verContacto() {
    quitarDiv()
    contacto.className += 'visible';
}

function verPortfolio() {
    quitarDiv()
    portfolio.className += 'visible';
}