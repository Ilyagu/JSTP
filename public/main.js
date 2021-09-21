const makeBlue = () => {
    const header = document.querySelector('.header');
    header.style.color = '#0000ff'
}

const makeBigger = () => {
    const header = document.querySelector('.header');
    header.style.fontSize = '50px'
}

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    makeBlue();
})
button.addEventListener('click', (event) => {
    makeBigger();
})