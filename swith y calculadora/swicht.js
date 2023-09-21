function mostrar() {
    opc=parseInt(prompt("ingresa opcion :1 Area cuadrado ,2 para triangulo ,3 para rectangulo"));
    switch(opc) {
        case 1:
            // Solicita al usuario que ingrese la longitud de un lado del cuadrado y convierte el valor a un número.
            lado = parseInt(prompt("Ingresa lado  del cuadrado:"));
           
            
            var area = lado * lado;
                if (lado!=0 && area!=0){
                    document.write("el resultado del area es : " + area);
                } else {
                    document.write("verificado tus datos");
                }
            
            // Muestra el resultado.
            alert("El área del cuadrado es: " + area);
            break;
        case 2:
            
            base = parseInt(prompt("Ingresa la base  del triangulo:"));
            altura = parseInt(prompt("Ingresa la altura  del triangulo:"));
            
            var area = base * altura/2;
                if (base!=0 && area!=0){
                    document.write("el resultado del area del triangulo es es : " + area);
                } else {
                    document.write("verificado tus datos");
                }
            
            // Muestra el resultado.
            alert("El área del triangulo es: " + area);
            break;
        case 3:
            
            largo = parseInt(prompt("Ingresa el largo  del rectangulo:"));
            ancho = parseInt(prompt("Ingresa el ancho del rectangulo:"));
            
            var area = largo * ancho;
                if (base!=0 && area!=0){
                    document.write("el resultado del area del rectangulo es es : " + area);
                } else {
                    document.write("verificado tus datos");
                }
            
            // Muestra el resultado.
            alert("El área del rectangulo es: " + area);
            break;
    
        
    
        
    
    }
}

// Llama a la función para ejecutarla.
mostrar();

