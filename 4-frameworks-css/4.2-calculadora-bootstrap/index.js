const buttonOperationElement = document.querySelector('#operation-button');

// html: onclick=""
buttonOperationElement.addEventListener('click', () => {
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    // console.log(num1.value, num2.value);
    // console.log(num1.value, typeof num1.value);
    const result = parseInt(num1.value) + parseInt(num2.value);
    console.log('result', result)
    const divResult = document.querySelector('#result');
    divResult.innerHTML = result;
})