/**
 * Tipos de datos en programacion
 * 
 * SIMPLES
 * String: Se utiliza para guardar.
 * Char: Un solo caracterer.
 * Number: Datos numericos (entero o decimal)
 * Boolean: Valores de tipo bandera (true y false)
 * 
 * COMPLEJOS
 * Array: Lista de valores.
 * Object: Guarda varios datos de un mismo element
 */

/**
 * Scope (ambito de una variable)
 * Es el lugar donde "vive una variable"
 * Tiempo de ejecucion: Mientras el programa esta activo.
 * Persistencia: Viven siempre
 */

// Crear e inicializar una variable
var senseiName = "Montoya";

// Crear una variable
var studentName;
// Inicializar el valor de la variable
studentName = "Luiss";

console.log(senseiName);
console.log(studentName);

// Variables de tipo caracter
var onvre = 'H';
var shiika = 'M';
var other = 'O';
console.log(other);

// Variables de tipo number (entero y decimal)
var age = 15;
var money = 99.50;
var transferAmount = 900;

// Boolean
var isMayor = false;
console.log(isMayor);

// Objeto: Para agrupar varios datos que le pertenecen a una entidad
// key: valor
// atributo: valor
// llave: valor
// property: valor
// var cellular = {};
var student = { 
    name: 'jesus', 
    app: 'bustamante', 
    apm: 'valenzuela', 
    age: 20, 
    isMayor: true, // trailling commas
};
console.log(student);
// studentName
console.log(student.name);

// array: Represantar listas de cosas
var fruits = [
    'apple', // 0
    'watermelon', // 1 
    'grape',  // 2
    'papaya' // 3
];
console.log(fruits);
// imprimir la tercera fruta
console.log(fruits[2]);

// array de objetos
var movies = [
 { name: 'harry potter', director: 'juanito', actors: ['daniel', 'emma'] },
 { name: 'avengers', director: 'juanito2', actors: [ { name: 'chris', age: 40 }, { name: 'robert', age: 55 } ] },
];