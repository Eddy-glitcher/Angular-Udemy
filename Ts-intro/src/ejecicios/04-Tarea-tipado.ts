
interface SuperHeroe {
    nombre : string;
    edad   : Number;
    direccion : DireccionHeroe;
    mostrarDireccion : ()=> string; // debo especificar que es una funcion y el tipo de dato que retorna.
}

interface DireccionHeroe {
    calle : string;
    pais: string;
    ciudad: string;
}



const superHeroe : SuperHeroe  = {
    nombre:'Spiderman',
    edad  : 30,
    direccion:{
        calle : 'Main St',
        pais  : 'EE.UU',
        ciudad: 'Nueva York' 
    },
    mostrarDireccion (){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccion = superHeroe.mostrarDireccion();

console.log(direccion); 