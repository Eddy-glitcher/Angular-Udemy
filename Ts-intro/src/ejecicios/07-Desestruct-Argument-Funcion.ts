
interface Producto{
    desc : string;
    precio : number;
}

const telefono: Producto = {
    desc : 'Samsung',
    precio : 560.000
}

const tableta: Producto = {
    desc : 'Samsung',
    precio : 900.000
}

function calculaISV(productos : Producto[]) : [Number,Number] { // retornaré un arreglo con dos numeros dentro
    let total = 0;
    
    productos.forEach( ({precio})=>{ // Uso la desestructuracion para obtemner la propiedad precio del obj productos
        total += precio; 
    } )

    return [total, total * 0.15]; // retorno un arreglo 

}

const articulos = [ telefono, tableta];

const [total,isv] = calculaISV(articulos); // desestructuro el arreglo retornado por la funcion

console.log('Total: ',total);
console.log('ISV total: ',isv);

export {
    calculaISV,
    Producto
}