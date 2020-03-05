function nombre_completo(nombres: string, apellido_paterno: string, apellido_materno: string): string {
    return nombres + ' ' + apellido_paterno + ' ' + apellido_materno;
}
// En TypeScript los parámetros son obligatorios.a menos que los declaremos OPCIONALES
// anteponiendo el símbolo de "?" al final de la variable & antes de los ":"
// En JavaScript los parámetros no son obligatorios.
let result = nombre_completo('Cristobal Andres', 'Contreras', 'Orellana');
console.log(result);
// Parámetros Opcionales => ?
function nombre_completo2(nombres: string, apellido_paterno?: string, apellido_materno?: string): string {
    if (apellido_paterno)
        return nombres + ' ' + apellido_paterno;
    if (apellido_materno)
        return nombres + ' ' + apellido_materno;
    if (apellido_paterno && apellido_materno)
        return nombres + ' ' + apellido_paterno  + ' ' + apellido_materno;
    else
        return nombres
}
let result2 = nombre_completo2('Cris Snow');
console.log(result2);
