/**
 * Una función es un bloque de código que se puede llamar o invocar en cualquier 
 * parte del programa. Las funciones permiten agrupar un conjunto de instrucciones 
 * para realizar una tarea específica, lo cual ayuda a organizar y reutilizar el 
 * código. Al definir una función, puedes proporcionarle 
 * parámetros (valores de entrada) y también puede devolver un resultado.
 */

// Definimos una funcion

var pi = 3.142398364917326849164912841
var a= 13
function saludar(nombre){
    console.log('Hola me llamo '+ nombre)
}

saludar('Montoyita')
saludar('Angel')

function limpiarCasa(velocidad){
    console.log("Voy a limpiar mi casa a una velocidad "+ velocidad)
}

limpiarCasa([24,12])

function suma(a,b){
    var sum = a + b
    console.log(sum)
}

suma(7, 13)