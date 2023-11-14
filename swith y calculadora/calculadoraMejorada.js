
// Función para la suma
function sumar(n1, n2) {
    // Calcula la suma de n1 y n2 y almacena el resultado en la variable resultado
    var resultado = n1 + n2;
    // Obtiene el elemento HTML con el id "resultado" y lo almacena en la variable res
    var res = document.getElementById("resultado");

    // Verifica si resultado es un número válido usando isNaN
    if (!isNaN(resultado)) {
        // Hace visible el elemento con el id "respuesta" estableciendo su estilo de visualización en "block"
        document.getElementById("respuesta").style.display = "block";
        // Establece el contenido de res para mostrar el resultado de la suma
        res.innerHTML = `El resultado de la suma es: ${resultado}`;
        // Establece el color del texto de res en verde
        res.style.color = "green";
    } else {
        // Si resultado no es un número válido
        document.getElementById("respuesta").style.display = "block";
        // Muestra un mensaje de error en res
        res.innerHTML = `Verifique sus datos`;
        // Establece el color del texto de res en rojo
        res.style.color = "red";
    }
}

// Función para la resta
function restar() {
    // Obtiene los valores de los elementos HTML con los id "n1" y "n2" y los convierte a enteros
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    // Calcula la resta de n1 y n2 y almacena el resultado en la variable resultado
    let resultado = n1 - n2;

    // Verifica si resultado es un número válido usando isNaN
    if (!isNaN(resultado)) {
        // Hace visible el elemento con el id "respuesta" estableciendo su estilo de visualización en "block"
        document.getElementById("respuesta").style.display = "block";
        // Establece el contenido del elemento con el id "resultado" para mostrar el resultado de la resta
        document.getElementById("resultado").innerHTML = `El resultado de la resta es: ${resultado}`;
    } else {
        // Si resultado no es un número válido
        document.getElementById("respuesta").style.display = "block";
        // Muestra un mensaje de error en el elemento con el id "resultado"
        document.getElementById("resultado").innerHTML = `Verifique sus datos`;
        // Establece el color del texto del elemento con el id "resultado" en rojo
        document.getElementById("resultado").style.color = "red";
    }
}

// Función para la multiplicación
function multiplicacion() {
    // Obtiene los valores de los elementos HTML con los id "n1" y "n2" y los convierte a enteros
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    // Calcula el producto de n1 y n2 y almacena el resultado en la variable resultado
    let resultado = n1 * n2;

    // Verifica si resultado es un número válido usando isNaN
    if (!isNaN(resultado)) {
        // Hace visible el elemento con el id "respuesta" estableciendo su estilo de visualización en "block"
        document.getElementById("respuesta").style.display = "block";
        // Establece el contenido del elemento con el id "resultado" para mostrar el resultado de la multiplicación
        document.getElementById("resultado").innerHTML = `El resultado de la multiplicación es: ${resultado}`;
    } else {
        // Si resultado no es un número válido
        document.getElementById("respuesta").style.display = "block";
        // Muestra un mensaje de error en el elemento con el id "resultado"
        document.getElementById("resultado").innerHTML = `Verifique sus datos`;
        // Establece el color del texto del elemento con el id "resultado" en rojo
        document.getElementById("resultado").style.color = "red";
    }
}

// Función para la división
function dividir() {
    // Obtiene los valores de los elementos HTML con los id "n1" y "n2" y los convierte a enteros
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    // Verifica si el divisor (n2) es cero
    if (n2 === 0) {
        // Si n2 es cero, muestra un mensaje de error en el elemento con el id "resultado"
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
        // Establece el color del texto del elemento con el id "resultado" en rojo
        document.getElementById("resultado").style.color = "red";
    } else {
        // Si el divisor no es cero, calcula el cociente de n1 y n2 y almacena el resultado en la variable resultado
        let resultado = n1 / n2;

        // Verifica si resultado es un número válido usando isNaN
        if (!isNaN(resultado)) {
            // Hace visible el elemento con el id "respuesta" estableciendo su estilo de visualización en "block"
            document.getElementById("respuesta").style.display = "block";
            // Establece el contenido del elemento con el id "resultado" para mostrar el resultado de la división
            document.getElementById("resultado").innerHTML = `El resultado de la división es: ${resultado}`;
        } else {
            // Si resultado no es un número válido
            document.getElementById("respuesta").style.display = "block";
            // Muestra un mensaje de error en el elemento con el id "resultado"
            document.getElementById("resultado").innerHTML = `Verifique sus datos`;
            // Establece el color del texto del elemento con el id "resultado" en rojo
            document.getElementById("resultado").style.color = "red";
        }
    }
}

// Función para la potenciación
function potencia() {}
    // Obtiene el valor del elemento HTML con el id "n1" y lo convierte a entero
    let n1 = parseInt(document.getElementById("n1").value);
    // Calcula n1 elevado al cuadrado y almacena el resultado en la variable resultado
    let resultado = Math.pow(n1, 2);

    // Verifica si resultado es un número válido usando isNaN
    if (!isNaN(resultado)) {
        // Hace visible el elemento con el id "respuesta" estableciendo su estilo de visualización en "block"
        document.getElementById("respuesta").style.display = "block";
        // Establece el contenido del elemento con el id "resultado" para mostrar el resultado de la potencia
        document.getElementById("resultado").innerHTML = `El resultado de la potencia es: ${resultado}`;
    } else {
        // Si resultado no es un número válido
        document.getElementById("respuesta").style.display = "block";
        // Muestra un mensaje de error en el elemento con el id "resultado
    }



