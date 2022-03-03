/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"  
 * 
 * Explora esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */
let mes = 10

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Estamos en el primer trimestre");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Estamos en el segundo trimestre");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Estamos en el tercer trimestre");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Estamos en el cuarto trimestre");
        break;
    default:
    console.log("Ese mes no existe");
        break;
}

// Escribir a partir de aquí


