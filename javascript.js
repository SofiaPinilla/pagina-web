const inicioJ = document.getElementById('inicioJavi');
const contactoJ = document.getElementById('contactoJavi');
const inicio = document.getElementById('inicio')
const contacto = document.getElementById('contacto')
const portfolioJ = document.getElementById('portfolioJavi');
const portfolio = document.getElementById('portfolio');


inicioJ.addEventListener('click', verInicio);
contactoJ.addEventListener('click', verContacto);
portfolioJ.addEventListener('click', verPortfolio)

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