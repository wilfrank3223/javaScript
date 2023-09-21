function mostrar() {
    // Solicita al usuario ingresar una opción del 1 al 5.
    opc = parseInt(prompt("Ingresa una opción: 1 para suma, 2 para resta, 3 para multiplicación, 4 para división, o 5 para determinar cuál es mayor"));

    // Utiliza una declaración "switch" para realizar diferentes acciones según la opción ingresada.
    switch (opc) {
        case 1:
            // Pide al usuario ingresar dos números y los convierte a números de punto flotante.
            n1 = parseFloat(prompt("Ingresa un número:"));
            n2 = parseFloat(prompt("Ingresa el segundo número:"));

            // Calcula la suma de los dos números.
            var resultado = n1 + n2;

            // Verifica si ambos números son distintos de cero y muestra el resultado o un mensaje de error.
            if (n1 != 0 && n2 != 0) {
                document.write("El resultado de la suma es: " + resultado);
            } else {
                document.write("Verifica tus datos");
            }
            break;

        case 2:
            // Similar al caso 1, pero realiza la resta.
            // ...

        case 3:
            // Similar al caso 1, pero realiza la multiplicación.
            // ...

        case 4:
            // Similar al caso 1, pero realiza la división.
            // ...

        case 5:
            // Pide al usuario ingresar dos números.
            n1 = parseFloat(prompt("Ingresa un número:"));
            n2 = parseFloat(prompt("Ingresa el segundo número:"));

            // Compara los dos números para determinar cuál es mayor.
            if (n1 > n2) {
                document.write("El número " + n1 + " es mayor que " + n2);
            } else if (n2 > n1) {
                document.write("El número " + n2 + " es mayor que " + n1);
            }
            break;
    }
}

// Llama a la función "mostrar()" para que se ejecute.
mostrar();
