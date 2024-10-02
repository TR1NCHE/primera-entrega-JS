function cotizarSeguro() {
    let precioBase = 0;
    let marca;
    const añoActual = 2024;  

    //Pedimos al usuario que ingrese la marca 
    do {
        marca = prompt("Ingresa la marca del auto (Fiat, Ford, Bmw, Honda):").toLowerCase();
        
        if (marca === 'fiat') {
            precioBase = 500;
        } else if (marca === 'ford') {
            precioBase = 600;
        } else if (marca === 'bmw') {
            precioBase = 700;
        } else if (marca === 'honda') {
            precioBase = 800;
        } else {
            console.log("Marca no válida. Intenta nuevamente.");
        }
    } while (precioBase === 0);  

    let año;
    let factorAño = 1;

    //Pedimos al usuario que ingrese el año 
    do {
        año = parseInt(prompt("Ingresa el año del auto (ej. 2024):"));

        if (isNaN(año) || año < 1900 || año > añoActual) {
            console.log("Año no válido. Intenta nuevamente.");
        }
    } while (isNaN(año) || año < 1900 || año > añoActual);  

    //Ajuste de precio según el año
    if (año >= 2024) {
        factorAño = 1.2; 
    } else if (año >= 2010) {
        factorAño = 1.0; 
    } else {
        factorAño = 0.8; 
    }

    let version;
    let factorVersion = 1;

    //Pedimos al usuario que ingrese la versión
    do {
        version = prompt("Ingresa la versión del auto (Básica, Media, Premium):").toLowerCase();

        if (version === 'básica') {
            factorVersion = 0.9;  
        } else if (version === 'media') {
            factorVersion = 1.0;  
        } else if (version === 'premium') {
            factorVersion = 1.3;  
        } else {
            console.log("Versión no válida. Intenta nuevamente.");
        }
    } while (factorVersion === 1 && version !== 'media' && version !== 'premium' && version !== 'básica');

    //Calcular el presupuesto final
    let presupuestoFinal = precioBase * factorAño * factorVersion;

    //Mostrar el presupuesto final
    console.log("El presupuesto para tu seguro es: " + presupuestoFinal.toFixed(2));
}


cotizarSeguro();
