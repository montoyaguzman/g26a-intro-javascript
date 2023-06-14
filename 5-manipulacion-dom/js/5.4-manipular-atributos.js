function cambiarAtributo() {
    var imagen = document.getElementById('mi-imagen')
    imagen.src = "./assets/imagen1.jpg" // forma erronea
    imagen.setAttribute('src','./assets/imagen1.jpg')
    imagen.alt = "Esta es otra imagen" // forma erronea
    imagen.setAttribute('alt','Esta es otra imagen')
}