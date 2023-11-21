// Este bloque de código agrega un evento de escucha al objeto 'window' para detectar cuando se presiona una tecla.
window.addEventListener('keydown', (e) => {
    // Se verifica si la tecla presionada es el signo de suma ('+').
    if (e.key == "+") {
        // Si es así, se llama a la función incremento().
        incremento();
    }
    // Si la tecla presionada es el signo de resta ('-').
    else if (e.key == "-") {
        // Se llama a la función decremento().
        decremento();
    }
});

// Se declara una variable 'contador' e se inicializa con el valor 0.
let contador = 0;

// Se obtiene una referencia al elemento HTML con el id "valor".
const valor = document.getElementById("valor");

// Esta función incrementa el valor de 'contador' en 1 y actualiza el contenido del elemento HTML con el nuevo valor.
function incremento() {
    // Se incrementa 'contador'.
    contador += 1;
    // Se actualiza el contenido del elemento HTML con el valor actualizado de 'contador'.
    valor.innerHTML = contador;
}

// Esta función decrementa el valor de 'contador' en 1, pero asegura que 'contador' no sea menor que 0.
function decremento() {
    // Se verifica si 'contador' es mayor que 0.
    if (contador > 0) {
        // Si es así, se decrementa 'contador'.
        contador -= 1;
        // Se actualiza el contenido del elemento HTML con el valor actualizado de 'contador'.
        valor.innerHTML = contador;
    } else {
        // Si 'contador' es 0, se mantiene en 0 y se actualiza el contenido del elemento HTML.
        contador = 0;
        valor.innerHTML = contador;
    }
}

// Esta función establece el valor de 'contador' en 0 y actualiza el contenido del elemento HTML.
function resetear() {
    contador = 0;
    valor.innerHTML = contador;
}
