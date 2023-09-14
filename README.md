# pruebas

#ultima clase
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

 carro.color = "rojo": 5 carro.modelo = "2025";



carro.marca "kia":



print(carro.placa); 9 print(carro.color);


print(carro.modelo);

print(carro.marca);

 Alumno alumno Alumno(); 13

alumno.nombre 14 alumno.direccion "kra54 9g":

= "juan";



} 

print(alumno.nombre); 16 print(alumno.direccion);



class Car{



String? placa;

String? color;



String? modelo;

 String? marca; 23 }



class Alumno{ 25 String? nombre;



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
 
