console.log('====== get element ======');
const myDivElementWithOpc1 = document.getElementById('myDiv');
const liElementListWithOpc1 = document.getElementsByClassName('my-item');
const liElementListByTagWithOpc1 = document.getElementsByTagName('ul');
console.log('myDivElementWithOpc1: ', myDivElementWithOpc1);
console.log('liElementListWithOpc1: ',liElementListWithOpc1);
console.log('liElementListByTagWithOpc1: ',liElementListByTagWithOpc1.childNodes);


console.log('====== query selector ======');
const myDivElementWithOpc2 = document.querySelector('#myDiv');
const liElmentListWithOpc2 = document.querySelector('.my-item');
// const liElementListByTagWithOpc2 = document.querySelector('li');
const liElementListByTagWithOpc2 = document.querySelectorAll('li');
console.log('myDivElementWithOpc2: ', myDivElementWithOpc2);
console.log('liElmentListWithOpc2: ',liElmentListWithOpc2);
console.log('liElementListByTagWithOpc2: ',liElementListByTagWithOpc2);