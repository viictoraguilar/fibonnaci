/*
  0,1,1,2,3,5,8,13,21,etc
*/


function sucesionFibonacci(entrada) {

  limpiar()
  /*
    Manejo de la serie
    valor primero = tiene valor actual
    valor segundo = tiene valor nuevo
    valor tercero = tiene el valor siguiente
  */

  //Creamos los valores de inicio
  let primero = 0
  let segundo = 1
  let tercero = null
  let numero_maximo_elementos = 100
  let elementos_serie = entrada.value

  //Validamos la entrada
  if(elementos_serie > numero_maximo_elementos) {
    imprimir('Intenta menos de 100 elementos')
    return
  }

  //Imprimir los valores iniciales
  imprimir(primero)
  imprimir(segundo)

  //Se hace la iteración de elementos de la serie
  for(i = 0; i < elementos_serie - 2; i++) {
    tercero = primero + segundo //Valor siguiente en la sucesión
    primero = segundo //Respaldando valores
    segundo = tercero
    imprimir(tercero)
  }
}

function imprimir(valor) {
  document.getElementById("resultado").innerHTML += valor + " "
}

function limpiar() {
  document.getElementById('resultado').innerHTML = ""
}