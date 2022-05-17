

class PersonaNormal{
    constructor( 
        public ciudad : String,
        public direccion : String
    ){}
}

class HeroeAvenger extends PersonaNormal{

    
    // private alterEgo: String;  // private significa que esta propiedad solo va a ser visible en esta clase
    // public edad : Number;  // se va poder ver fuera de la clase
    // static nombreReal: String; // podré acceder a esta propiedad sin crear una instancia de la clase
    
    // la diferencia entre privada o publica es el alcance entre ellos
    
    constructor(public alterEgo : String, public edad : Number, public nombreReal : String){
        // this.alterEgo = alterEgo; Esto ya está en desuso ya qu ocupa muchas lineas de codigo
        
        // super es llamar el constructor de la cual se extiende

        super(nombreReal, "New York"); // No es necesario usar this ya que le mandamos el argumento que resivimos por el constructor
    }

} 

const ironMan = new HeroeAvenger('IronMan',32,'Tony Stark');
