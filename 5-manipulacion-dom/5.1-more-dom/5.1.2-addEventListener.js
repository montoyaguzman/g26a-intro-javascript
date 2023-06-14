function sayHello() {
    console.log('hola');
}

const button = document.querySelector('#my-say-buttom');
const myDivElement = document.querySelector('#myDiv');

// SINTAXIS
// elementHtml.addEventListener('nameEvent', fn)
button.addEventListener('click', () => {
    sayHello();
});

myDivElement.addEventListener('mouseover', () => {
    console.log('hiiiiii');
});