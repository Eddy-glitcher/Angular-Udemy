import { Producto, calculaISV } from "./07-Desestruct-Argument-Funcion";


const carritoCompras: Producto[] = [
    {
        desc : 'Telefono 1124',
        precio: 120.000
    },
    {
        desc : 'Xiaomy 8',
        precio: 800.000
    }    
]

const [totall,isvv] = calculaISV(carritoCompras);

console.log('Total: ',totall);
console.log('ISV total: ',isvv);




