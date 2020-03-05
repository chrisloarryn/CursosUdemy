interface Perro {
    // Atributo
    nombre: string;
}
function adoptar(mascota: Perro): void {
    console.log(`yo adopté a ${mascota.nombre}`)
}
let mi_mascota = {nombre: 'Tobby'}  // no se le debe poner el tipo :Perro,
                                    // ya que, de ser así, se deben cumplir
                                    // las variables de la interfaz al pie de
                                    // la letra.
let numero = 20;
adoptar(mi_mascota);
