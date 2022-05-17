
function queTipoSoy <T> (arg: T){

    return arg;
}

let soyString = 'Hola Mundo';
let soyNumero = 23;


queTipoSoy(soyString);
queTipoSoy(soyNumero);


let explicito = queTipoSoy< number[] >([23456,35,2435,24]);


// Los genericos nos ayudan a transmutar informacion 