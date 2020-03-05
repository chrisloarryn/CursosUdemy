//  Funciones en JS  //
function multiplicar_numeros(numero1, numero2){
    return numero1 * numero2
}
let res = multiplicar_numeros(12,12);
console.log(`el resultado es: ${res}`);
//
let la_cuenta = 100;
function aumentarLaCuenta(valor, la_cuenta) {
    console.log(`valor de la cuenta dentro de la funcion: ${la_cuenta}`) //  "valor...." + la_cuenta;
    la_cuenta = la_cuenta + valor
}
aumentarLaCuenta(20,40);
console.log(`la cuenta es de: ${la_cuenta}`);
