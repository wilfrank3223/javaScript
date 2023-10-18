function calcularTotal() {
    const dishType = document.getElementById("dish-type").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const beverage = document.getElementById("beverage").value;
    let total = 0;

    // Calcular el costo del plato
    switch (dishType) {
        case "ejecutivo":
            total += 12.000;
            break;
        case "corriente":
            total += 10.000;
            break;
        case "especial":
            total += 20.000;
            break;
    }

    // Calcular el costo de la bebida
    switch (beverage) {
        case "limonada":
            // Limonada es gratis, no se suma al total
            break;
      
        case "gaseosa":
            total += 2.500;
            break;
        case "jugos":
            total += 3.500;
            break;
        case "cerveza":
            total += 5.000;
            break;
        case "michelada":
            total += 5.500;
            break;
        
    }

    // Calcular el costo total
    total *= quantity;

    // Mostrar el total en el input
    document.getElementById("total").value = "$" + total.toFixed(3);
}