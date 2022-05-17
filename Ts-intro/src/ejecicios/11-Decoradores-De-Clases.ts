// Los decoradores sirven para cambiar las clases en el momento en el que son definidas.. es decir par ael momento en que angular compile el codigo, extienda internamente esas funcionalidades que queremos implementar


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
    reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad : string = 'Hola que mas';

    imprimir(){
        console.log(this.miPropiedad);
    }
}