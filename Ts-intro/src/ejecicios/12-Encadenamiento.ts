interface Pasajero{
    nombre : string;
    hijos ?: string[];

}

const pasajero1 : Pasajero = {
    nombre: 'Fernando'
}

const pasajero2 : Pasajero = {
    nombre: 'Melissa',
    hijos: ['Amanda', 'Cristian']
}

function imprimeHijos(pasajeros : Pasajero): void{

    const cuantosHijos =pasajeros.hijos?.length || 0 ; // Le decimos que intente buscar eesa propiedad sino encuentra nada que regrese 0 
    
    console.log( cuantosHijos)
}

imprimeHijos(pasajero2);
