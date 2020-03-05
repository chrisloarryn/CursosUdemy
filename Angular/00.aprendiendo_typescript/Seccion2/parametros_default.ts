// Parámetros Default en TypeScript
function asignar_posicion(nombre: string, numero: number, posicion: string = 'Defensa') {
    return `${nombre} jugará con el ${numero} en la posición ${posicion}`
}
// EN TYPESCRIPT, TODOS LOS PARAMETROS SON REQUERIDOS.
let jugador1: string = asignar_posicion('Pedro', 10, 'Delantero');
console.log(jugador1);
// Los parámetros DEFAULT, son tratados como OPCIONALES
// si llegas a pasar un VALOR, este SOBREESCRIBE el parámetro POR DEFECTO.
let jugador2: string = asignar_posicion('Juan Perez',11);
console.log(jugador2);
