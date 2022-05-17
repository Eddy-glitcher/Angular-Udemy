
// function sumar(a: number,b: number):number{
//     return a + b;
// }

// const sumarNumeros = ( a: number, b: number ) : number=>{
//     return a + b;
// }

// function multiplicar( n1: number, n2?:number, base: number = 2): number{ // Es buena práctica siempre poner el tipo de dato del retorno EL ORDEN DE LOS ARGUMENTOS DEBE SER EL SIGUIENTE = 1 -Obligatorios. 2- Opcionales 3-Con algun valor por defecto 
//     return n1 * base;
// }

// multiplicar(12,11);
// const sumando = sumar(12,12);

// console.log(sumando);

// // FUNCIONES CON OBJETOS COMO ARGUMENTOS

// interface PersonajeLOR{
//     nombre: string;
//     pv:     number;
//     mostrarHp : ()=> void;
// }

// function curar(personaje: PersonajeLOR, curarX : number): void{
//     personaje.pv += curarX;

//     console.log(personaje);
// }

// const nuevoPersonaje = {  // Las constantes son mas ligeras que con let o var ya que sus propiedades nunca van a cambiar
//     nombre : 'Iron-Man',
//     pv     : 123,
//     mostrarHp(){
//         console.log(`Mis piuntos de vida son: ${this.pv}`);
//     }
// }

// curar(nuevoPersonaje,77);

// nuevoPersonaje.mostrarHp();