//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedad_recargo = 0.35 
var salario_recargo = 0.05


//Recargo
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre
var continuar = true


while (continuar) {
  nombre = prompt("Ingrese su nombre, por favor. Si desea salir, escriba 'Salir'")
  if (nombre.toUpperCase() === "SALIR") {
    continuar = false
    break
  }
  var edad_numero
  while (isNaN(edad_numero) || edad_numero < 18) {
    var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
    edad_numero = parseInt(edad)
  }

  var casado = prompt("¿Está casado actualmente?")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge_numero = 0; 
  if("SI" == casado.toUpperCase()){
    while (isNaN(edad_conyuge)) {
      var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
      edad_conyuge_numero = parseInt(edad_conyuge);
    }


    if (!isNaN(edad_conyuge_numero)) { // Viendo si es un numero
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo_por_casado = precio_base * casado_18;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo_por_casado = precio_base * casado_25;
      } else if (edad_conyuge_numero >= 50) {
        recargo_por_casado = precio_base * casado_50;
      }
    } else {
      alert("La edad del cónyuge debe ser un número válido."); 
    }
  }
  
  var hijos = prompt("¿Tiene hijos o hijas?")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  if (hijos.toUpperCase() == "SI") {
    while (isNaN(cantidad_hijos)) {
      var cantidad_hijos_str = prompt("¿Cuántos hijos tiene?");
      while (isNaN(parseInt(cantidad_hijos_str))) {
        cantidad_hijos_str = prompt("Por favor, ingrese un número válido para la cantidad de hijos:");
      }
var cantidad_hijos = parseInt(cantidad_hijos_str);
    }
  }
  // puntos extra
  var propiedades = parseInt(prompt("¿Cuántas propiedades posee?"))
  var salario = parseInt(prompt("¿Cuál es su salario mensual en quetzales?"))

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  var recargo_por_edad = 0
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo_por_edad = precio_base * edad_18
    recargo_total = recargo_total + recargo_por_edad
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo_por_edad = precio_base * edad_25
  } else if (edad_numero >= 50) {
    recargo_por_edad = precio_base * edad_50
  }
  //aqui puede colocar un else if() con el siguiente rango

  /** 
   * 2. Recargo por la edad del conyuge
   */
  var recargo_por_casado = 0
  if (casado.toUpperCase() == "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo_por_casado= precio_base * casado_18
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo_por_casado= precio_base * casado_25
    } else if (edad_conyuge_numero >= 50) {
      recargo_por_casado = precio_base * casado_50
    }
  }

  var recargo_por_hijos = cantidad_hijos > 0 ? precio_base * cantidad_hijos * hijos_recargo : 0
  var recargo_por_propiedades = propiedades > 0 ? precio_base * propiedades * propiedad_recargo : 0
  var recargo_por_salario = salario > 0 ? salario * salario_recargo : 0

  recargo_total = recargo_por_edad + recargo_por_casado + recargo_por_hijos + recargo_por_propiedades + recargo_por_salario
  precio_final = precio_base + recargo_total
  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: "+recargo_total)
  alert ("El precio sera de: "+precio_final)

}