# pruebas

# ultima clase
void main() {
  Calculadora calculadora = new Calculadora('ivan', 'mejia', 4, 2, 5);

  calculadora.nombreCompleto();
  print('Suma de notas son :  ${calculadora.sumaNotas()}');
  print('Multiplicación de notas son:  ${calculadora.multiplicacionNotas()}');
  print('Promedio de notas son :  ${calculadora.promedioNotas()}');
}
class Calculadora {
  double n1;
  double n2;
  double n3;
  String nombre;
  String apellido;
  String a;
 

  Calculadora(this.nombre, this.apellido, this.n1, this.n2, this.n3, this.a);

  double sumaNotas() {
    return n1 + n2 + n3;
  }

  double multiplicacionNotas() {
    return n1 * n2 * n3;
  }

  double promedioNotas() {
    a = sumaNotas() / 3;
  }
  void nombreCompleto(){
    print('Nombre completo: $nombre $apellido');
  }
}

# dartpad
void main() {

Car carro new Car();


 carro.placa carnmb465";

 carro.color = "rojo":  
 carro.modelo = "2025";



carro.marca "kia":



print(carro.placa); 
print(carro.color);


print(carro.modelo);

print(carro.marca);

 Alumno alumno Alumno(); 

alumno.nombre 
alumno.direccion "kra54 9g":

= "juan";



} 

print(alumno.nombre); 
print(alumno.direccion);



class Car{



String? placa;

String? color;



String? modelo;

 String? marca; 
 }



class Alumno{ 
String? nombre;



String? direccion;
 }

 # java
 public class MyClass f



public static void main(String args[]) { Car carro = new Car;





carro.placa = "nmb465";



carro.color = "rojo";



carro.modelo = 2825";



carro.marca = "kia";

system.on.print(carro.placa);



system.on.print(carro.color); system.on.print(carro.modelo);





system.on.print(carro.marca); Alumno alumno Alumno();





alumno.nombre "juan";



alumno.direccion "kra54#9g";



system.on.print(alumno.nombre);


system.on.print(alumno.direccion);



class Car (

String? placa;

String? color; String? modelo;

String? marcaj



class Alumno f

String? nombres String? direccion;

}


# ruby
class Car

attr_accessor splaca, color, modelo, marca

end

carro Car.new

carro.placa abm354

carro.color "roje

carro.modelo 2025)

carro.marca "kia"


puts carro.place


puts carro.color

puts carro.modelo



buts carro.marca
 class Alumno attr_accessor nombre, direccion

 end


alumno Alumno.new


alumno.hombre-ivan


alumno.direccion "kr65449"


puts alumno.nostre 24 puts alumno.direccion

# ultima actividad
# dartpad
void main() {

  Instructor pablo = new Instructor();

  pablo.nombre = "pablo"; 
  pablo.apellido = "herrera";
  pablo.sueldo = 7000000; 
  print("Instructor: ${pablo.nombre} ${pablo.apellido}");
  print("Sueldo: ${pablo.sueldo}"); 


  Aprendiz ivan = new Aprendiz(); 
  ivan.nombre = "ivan";

  ivan.apellido = "mejia";


  ivan.ficha = "ADSO";

  print("Aprendiz: ${ivan.nombre} ${ivan.apellido}"); 

  print("Ficha: ${ivan.ficha}");

}

  class Instructor {



  String? nombre; 
  String? apellido;

  int? sueldo;



}
  class Aprendiz extends Instructor {  
  
  String? ficha;



}
# java
public class MyClass {
    public static void main(String args[]) {
    Instructor pablo = new Instructor();
      
    pablo.nombre = "pablo"; 
    pablo.apellido = "herrera";
    pablo.sueldo = 7000000; 
    System.out.println("Instructor: ${pablo.nombre} ${pablo.apellido}");
    System.out.println("Sueldo: ${pablo.sueldo}"); 
    
    Aprendiz ivan = new Aprendiz(); 
    ivan.nombre = "ivan";
    ivan.apellido = "mejia";
    ivan.ficha = "ADSO";
    System.out.println("Aprendiz: ${ivan.nombre} ${ivan.apellido}");
    System.out.println("Ficha: ${ivan.ficha}");
    }
}
    class Instructor {
        string? nombre;
        string? apellido;
        int sueldo;
        
    }
    class Aprendiz extends Instructor {
        string? ficha;
    }
# ruby
class Instructor
    attr_accessor :nombre, :apellido, :sueldo
end
pablo = Instructor.new
pablo.nombre = "pablo"
pablo.apellido = "herrera"
pablo.sueldo = 7000000

puts pablo.nombre
puts pablo.apellido
puts pablo.sueldo
class Aprendiz 
    attr_accessor :ficha
end
ivan = Aprendiz.new
ivan.nombre = "ivan"
ivan.apellido = "mejia"
ivan.ficha = "ADSO"

puts ivan.nombre
puts ivan.apellido
puts ivan.ficha
# CODIGO JAVA antepenultima actividad
public class MyClass {
    public static void main(String args[]) {
        Instructor manuel = new Instructor();
        manuel.nombre = "Manuel";
        manuel.cedula = 12234234;
        manuel.apellido = "Arango";
        manuel.setSexo(1);
        
        System.out.println(manuel.getSexo());
        
        manuel.setSueldo(4000000);
        System.out.println(manuel.getsueldo_total());
        
        System.out.println(manuel.cedula);
        
        System.out.println(manuel.nombre_completo());
        
        System.out.println("These are the data of Instructor Manuel:");
        
        Planta aviacion = new Planta();
        aviacion.dependencia = "Centro Industrial";
        
        System.out.println(aviacion.dependencia);
        
        Contrato fecha = new Contrato();
        fecha.ncontrato = "17/07/2027";
        System.out.println(fecha.ncontrato);
        
        Aprendiz camilo = new Aprendiz();
        camilo.ficha = "ADSO";
        System.out.println(camilo.ficha);
    }
}

class Person {
    int cedula;
    String nombre;
    String apellido;
    private int sexo;
    
    public Person() {
    
    }
    
    String nombre_completo() {
        return nombre + " " + apellido;
    }
    
    void setSexo(int sexo) {
        this.sexo = sexo;
    }
    
    int getSexo() {
        return this.sexo;
    }
}

class Instructor extends Person {
    private int sueldo;
    
    void setSueldo(int sueldo) {
        this.sueldo = sueldo;
    }
    
    int getsueldo_total() {
        return this.sueldo + 100;
    }
}

class Planta extends Person {
    String dependencia;
}

class Contrato extends Person {
    String ncontrato;
}

class Aprendiz extends Person {
    String ficha;
}

# primer punto ultima actividad
void main(){

  Car kia = Car();
  kia.placa = "nbm647";
  Propietario propietario = Propietario(); 
  propietario.nombre = "ivan";
  print(kia.placa); 
  print(propietario.nombre);

}
class Propietario{ 
  String? nombre;

  }

class Car{

  Propietario? propietario;
  String? placa;
  @override
  String toSting(){
  return "placa :$placa, propietario : ${propietario!.nombre}";
  }
}

