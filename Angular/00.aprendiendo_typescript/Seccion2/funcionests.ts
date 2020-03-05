//  Funciones en TS
function multiplcicar(x: number, y: number): number {
     return x*y
}
let producto: number = multiplcicar(5,8)
console.log(producto, 'res')
let sumatoria: number = 0;
console.log(sumatoria, ' sumatoria antes de ejecutar')
function sumar(): void {
    sumatoria++
}
sumar()
console.log(sumatoria, ' sumatoria después de ejecutar')

//  Buscar diferencia entre ++sumatoria y sumatoria++, simbolos
//  de suma al inicio o al final de la expresión.
