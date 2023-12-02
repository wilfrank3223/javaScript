// Precios base de los libros
const precioLibro1 = 20000;
const precioLibro2 = 15000;

// Cantidades iniciales de los libros
let cantidadLibro1 = 0;
let cantidadLibro2 = 0;

// Función para actualizar la pantalla con las cantidades y el total
function actualizarPantalla() {
  // Actualiza la cantidad y el subtotal del libro 1
  document.getElementById('cantidadLibro1').innerHTML = cantidadLibro1;
  document.getElementById('subtotalLibro1').innerHTML = `$${cantidadLibro1 * precioLibro1}`;

  // Actualiza la cantidad y el subtotal del libro 2
  document.getElementById('cantidadLibro2').innerHTML = cantidadLibro2;
  document.getElementById('subtotalLibro2').innerHTML = `$${cantidadLibro2 * precioLibro2}`;

  // Calcula y actualiza el total de la venta
  const totalVenta = cantidadLibro1 * precioLibro1 + cantidadLibro2 * precioLibro2;
  document.getElementById('totalVenta').innerHTML = `$${totalVenta}`;
}

// Agrega eventos de escucha a los botones de incremento y decremento de libros
document.getElementById('incrementoLibro1').addEventListener('click', () => {
  cantidadLibro1 += 1;
  actualizarPantalla();
});

document.getElementById('decrementoLibro1').addEventListener('click', () => {
  if (cantidadLibro1 > 0) {
    cantidadLibro1 -= 1;
    actualizarPantalla();
  }
});

document.getElementById('incrementoLibro2').addEventListener('click', () => {
  cantidadLibro2 += 1;
  actualizarPantalla();
});

document.getElementById('decrementoLibro2').addEventListener('click', () => {
  if (cantidadLibro2 > 0) {
    cantidadLibro2 -= 1;
    actualizarPantalla();
  }
});

// Agrega evento de escucha al botón de reseteo
document.getElementById('resetear').addEventListener('click', () => {
  cantidadLibro1 = 0;
  cantidadLibro2 = 0;
  actualizarPantalla();
});
