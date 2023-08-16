/**
 * El scope se refiere al alcance o contexto en el que se pueden acceder las variables 
 * en un programa. En JavaScript, existen dos tipos principales de scope: 
 * el scope global y el scope local.
 */

var mensaje = "Hola, mundo" // Variable Global

function imprimirMensaje(){
    var mensaje = 'QUE ONDA!!' // Variable local dentro de nuestra funcion
    console.log(mensaje) 
}

console.log(mensaje) // Salida: Hola, mundo
imprimirMensaje() // Salida: QUE ONDA!!

mensaje = "Adios mundo cruel"

console.log(mensaje) // Salida: Adios mundo cruel

/**
 * Funcion de multiplicar dos numeros y que muestre el resultado en consola
 * declar la variable resultado dentro de nuestra funcion y vamos a imprimirla
 * dentro de la funcion y fuera de la funcion
 */

function multiplicacion(a,b) {
    var resultado = a * b
    console.log("Dentro de mi funcion  Resultado es: " + resultado)
}

multiplicacion(7,8)

console.log("Fuera de mi funcion Resultado es:", resultado)