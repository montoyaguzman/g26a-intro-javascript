// const buttonOperationElement = document.querySelector('#operation-button');
const showResButton = document.querySelector('#show-res-button');
const selectOperationElement = document.querySelector('#operation-select');
var symbolo = '';

selectOperationElement.addEventListener('change', (event) => {
    const selectElement = event.target;
    symbolo = selectElement.options[selectElement.selectedIndex].text;
})

// // html: onclick=""
showResButton.addEventListener('click', () => {
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    // console.log(num1.value, num2.value);
    // console.log(num1.value, typeof num1.value);
    let result = 0;

    if (symbolo === '+') {
        result = parseInt(num1.value) + parseInt(num2.value);
    } else  if (symbolo === '-') {
        result = parseInt(num1.value) - parseInt(num2.value);
    } else  if (symbolo === '*') {
        result = parseInt(num1.value) * parseInt(num2.value);
    } else  if (symbolo === '/') {
        result = parseInt(num1.value) / parseInt(num2.value);
    }
    
    console.log('result', result)
    const divResult = document.querySelector('#result');
    divResult.innerHTML = result;
})

// buttonOperationElement.addEventListener('click', () => {
//     const num1 = document.getElementById('num1');
//     const num2 = document.getElementById('num2');
//     const result = parseInt(num1.value) + parseInt(num2.value);
//     console.log('result getElement', result)
//     const divResult = document.getElementById('result');
//     divResult.innerHTML = result;
// })