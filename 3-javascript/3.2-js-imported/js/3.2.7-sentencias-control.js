// AND &&
// Ambas variables deben ser verdadero para obtener verdadero

// OR ||
// Cuando al menos una de las dos variables sea verdadera es verdaero

// NEGACION !
// El valor contrario de esa variable

var isMayor = true;
var hasPermission = false;
var hasMoney = false;

// SINTAXIS IF
// if (condición) {
//   sentencia1
// } else {
//   sentencia2
// }

// true && true = true
if (isMayor && hasPermission && hasMoney) {
    console.log('ir al concierto de Taylor Swift');
} else if ((isMayor && !hasPermission) && hasMoney) {
    // if () {
    // programar la logica de 'pedirle dinero a su hermano'
    // }
    console.log('escaparse al concierto! ');
} else if (isMayor && hasPermission && !hasMoney) {
    console.log('ver youtube en casa');
} else {
    console.log('quedarse a escuchar a peso pluma en TV');
}

var age = 11;
switch (age) {
    case 10:
    case 11:
        console.log('no eres mayor de edad');
    break;
    case 18:
        console.log('eres mayor de edad');
    break;
    default: 
        console.log('numero desconocido');
    break;
}