/**
 * Valores por defecto de una variables
 * String/Char: ''
 * Number: 0 o 0.0
 * Boolean: false
 * Objetos: {} o null
 * Arrays: [] o null
 */

// creando una variable
var name = '';

// crear e inicializar
var app = 'montoya';

console.log('name: ',name);
console.log('app: ', app);
// reasginacion
app = 'gloria';
app  = ['gloria', 'montoya'];
// var appsArrays = ['gloria', 'montoya'];
console.log('app: ', app);
// acceder a una variable indefinida // Uncaught ReferenceError: apm is not defined
// console.log('apm: ', apm);

// NaN: Objeto especial de JS que se asgina a un valor no numerico
// Son tipos de datos 'vacios' de JS undefined o null, entre no son iguales
var gretting = NaN;
// var gretting = undefined;
// var gretting = null;
console.log('gretting: ', gretting);