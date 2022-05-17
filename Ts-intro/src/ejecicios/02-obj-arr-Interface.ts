// /*
//     declaramos un arreglo
// */ 

// let habilidades: (string | number | boolean)[] = ['Bash','Hola',true,12]; //Con esto Ts ya sabe que es un arreglo de tipo string y si tratamos de ingresarle un entero o cualquier otro valor que no sea un string nos marcará error


// interface Personaje{
//     nombre : string;
//     hp:number;
//     habilidades:string[];
//     puebloNatal ?: string; // Con esto le decimos que esta propiedad es opcional
// }

// const personaje: Personaje = {
//     nombre : "Spiderman",
//     hp     : 100,
//     habilidades : ['Bash', 'Counter', 'Healing']
// }

// personaje.puebloNatal = "Pueblo paleta";

// console.table(personaje);