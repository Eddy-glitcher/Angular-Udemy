// CREANDO OBJETOS Y DESESTRUCTURANDOLOS

interface  Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;
}

interface Detalles{
    autor : string;
    anio  : number;
}

const Reproductor : Reproductor ={
    volumen : 90,
    segundo : 39,
    cancion : 'Nothing Else Mathers',
    detalles : {
        autor : 'Metalica',
        anio : 2000
    }
}

const autor ="Juanito Perez";  

const {volumen,segundo,cancion, detalles:{autor : autorDetalle}  } = Reproductor; // extraigo las propiedades y las almaceno en constantes
// const {autor} =  detalles; // ESYE METODO ES MAS RECOMENDADO.... ES MAS FACIL DE LEER.

console.log("El Volumen actual es: ",volumen);
console.log("El Segundo actual es: ", segundo);
console.log("La Cancion actual es: ",cancion);
console.log("El autor es: ",autorDetalle);
