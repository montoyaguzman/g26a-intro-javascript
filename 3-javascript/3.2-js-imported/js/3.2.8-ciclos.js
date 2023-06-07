var fruits = ['apple', 'mangoo', 'grape', 'blueberry', 'banana'];

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

console.log('INICIO');
// inicio
var index = 0; 
while(index <= fruits.length) { // condicion
    console.log(index);
    console.log(fruits[index]);
    // index = index + 1; // razonDeCambio
    // index += 1; // razonDeCambio - asignacion suma
    index++; // razonDeCambio - operador incremento
}
console.log('FIN');


// for (inicio; condicion; razonCambio) {}
for(var j = 0; j <= fruits.length; j++) { 
    console.log(j);
    console.log(fruits[j]);
}
// 1 inicio
// 2 condicion
// 3 dentro de las llaves
// 4 si condcion es true? regresa al paso 3 (este paso se repite indefinidamente)
// 5 cuando no se cumple la condicion (paso 4) termina