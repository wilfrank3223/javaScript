// Precios base de los libros
const precioLibro1 = 20;
const precioLibro2 = 15;

// Función para calcular el subtotal de un libro y actualizar la pantalla
function calcularSubtotal(cantidad, precio, subtotalElement) {
  // Calcula el subtotal multiplicando la cantidad por el precio
  const subtotal = cantidad * precio;
  // Actualiza el contenido del elemento HTML con el subtotal calculado
  subtotalElement.textContent = `$${subtotal}`;
  // Devuelve el valor del subtotal
  return subtotal;
}

// Función para actualizar el total de la venta
function actualizarTotalVenta() {
  // Obtiene la cantidad de libros 1 y 2 desde los campos de entrada
  const cantidadLibro1 = parseInt(document.getElementById('cantidadLibro1').value);
  const cantidadLibro2 = parseInt(document.getElementById('cantidadLibro2').value);

  // Calcula el subtotal para el libro 1 y actualiza el elemento HTML correspondiente
  const subtotalLibro1 = calcularSubtotal(cantidadLibro1, precioLibro1, document.getElementById('subtotalLibro1'));
  // Calcula el subtotal para el libro 2 y actualiza el elemento HTML correspondiente
  const subtotalLibro2 = calcularSubtotal(cantidadLibro2, precioLibro2, document.getElementById('subtotalLibro2'));

  // Calcula el total sumando los subtotales de los dos libros
  const totalVenta = subtotalLibro1 + subtotalLibro2;
  // Actualiza el contenido del elemento HTML con el total de la venta
  document.getElementById('totalVenta').textContent = `$${totalVenta}`;
}

// Event listeners para las cantidades de los libros
document.getElementById('cantidadLibro1').addEventListener('input', actualizarTotalVenta);
document.getElementById('cantidadLibro2').addEventListener('input', actualizarTotalVenta);
