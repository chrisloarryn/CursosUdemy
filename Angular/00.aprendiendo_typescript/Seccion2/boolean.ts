let soy_alto: boolean = true
let soy_fan: boolean = false
console.log(soy_alto)
console.log(soy_fan)
let perro1: string = 'azul'
let perro2: string = `hola
sdfsdaf`                      // Comillas invertidas se pueden hacer textos multilinea
let pelicula: string = 'Hombres de negro'
let serie: string = 'One Piece'
let programas2 = `mis programas favoritos son: ${pelicula} y ${serie}`
console.log(programas2)
let edad_actual: number = 23;
let edad_futura: string = `
El siguiente mes mi edad será ${edad_actual+1}`
console.log(programas2.toUpperCase())
console.log(programas2.charAt(0))
// Crear Arrays
let mis_numeros: number[] = [1,2,3,4]
let mis_notas: Array<number> = [6,7,4]
mis_numeros.push(55)  // añadir numeros
let mi_equipo: string [] = ['Casillas, Buffon, Messi']
mi_equipo.push('Pogba'); console.log(mi_equipo.length); console.log(mi_equipo[0]);
let vector1: [number, number];  //  tupla 1
let vector2: [number, number];  //  tupla 2
vector1[2, 5]; vector2[5, 10];    //  inicializando tupla 1 & 2
let vector_resultante: [number, number] = [vector1[0]+vector2[0], vector1[1]+vector2[1]];  /* Suma de Vectores */
let tupla_5_elementos: [number, number, number, number, number] = [1,2,3,4,50]
let tupla_profesor: [string, number] = ['Cristobal Contreras', 1.58];
console.log(` ${tupla_profesor[0]} mide ${tupla_profesor[1]} metros. `);
// Usar tipo ANY, al usar librerias de terceros, any=cualquier cosa.
let obj_libreria: any; obj_libreria = 4; obj_libreria = true; obj_libreria = 'No lo sé';
console.log(obj_libreria.atributo_desconocido)      // podría tener atributos
console.log(obj_libreria.metodo_desconocido())      // podría tener métodos
let lista: any[] = [20, true, false, 'perro', null]; // puede ser cualquier tipo, pero en un <Array> - ad[]
let inutil: void = undefined; let vacio: void = null; let respuesta: string ="datos cargados"//selepuedenasignar2variables[ undefned & null ]




