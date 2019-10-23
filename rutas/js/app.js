var app = angular.module('angularApp',['ngRoute','ngSanitize']);

/**
 * Constantes
 */

 app.constant("serviciosConstantes", {
                                        "titulo":"AngularApp",
                                        "idioma":"es-ES",
                                        "version":"1.1",
                                        "autor":"Manu Carrillo",
                                        "github":"https://github.com/mcarrillo-7"
                                      });

/**
 * Providers
 */
function CancionProvider($http){

  console.log('CancionProvider');
  const ENDPOINT = "http://localhost:8080/cancion/";

  this.listar = function(){    
    console.log('cancionProvider listar ' + ENDPOINT);
    return $http.get(ENDPOINT);

  }// listar

  this.detalle = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider detalle ' + url);
    return $http.get(url);
    
  }// detalle

  this.eliminar = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider eliminar ' + url);
    return $http.delete(url); //Devuelve la promesa
    
  }// eliminar


  this.crear = function( nombreCancion ){    
    let url = ENDPOINT;
    console.log('cancionProvider nombreCancion ' + url);
    let body ={"id":0, "nombre":nombreCancion };

    return $http.post(url, body);
    
  }// crear

  this.modificar = function( cancion ){    
    let url = ENDPOINT  + cancion.id;
    console.log('cancionProvider modificar %s  id=%s nombre=%s', url, cancion);
    return $http.put(url , cancion);
    
  }
}

/**
 * Ejemplo servicio a través de una clase
 */

function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

function Rectangulo2(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

//Definir servicio
app.service("rectangulo",Rectangulo);
//Definir valores para calcular el area del rectangulo
app.value("tamanyoInicialRectangulo",{
  ancho:4,
  alto:5
});
app.service("rectangulo2",['tamanyoInicialRectangulo',Rectangulo2]);

//Definir servicio
app.service("cancionProvider", CancionProvider );

/**
 * Filtro personalizado para Capitalizar la primera letra de un String
 */

//definir filtro en la app
app.filter("capitalizar", function(){
  return function (cadena){
    if (cadena != undefined && typeof cadena == 'string'){
      //Ponemos la primera letra en mayuscula y lo concatenamos con el resto de caracteres
        return cadena.charAt(0).toUpperCase() + cadena.slice(1); 
      } else{
    
      }
        return "";
    }
  
});

app.filter("capitalizarEntreMedias2", function () {
  return function (cadena, nInicial, nFinal) {
    if (cadena != undefined && typeof cadena == 'string') {
      if (nInicial == undefined) {
        nInicial = 0;
        if (nFinal == undefined) {
          nFinal = 1;
        }
      }
      return cadena.slice(0, nInicial) + cadena.slice(nInicial, nFinal).toUpperCase() + cadena.slice(nFinal);
    } else {
      return "";
    }
  }
});

app.filter('capitalizePalabras', function () {
  return function (input, scope) {
    if (input != null) {
      input = input.toLowerCase().split(' ');//coge la oracion la pasa a minusculas y donde encuentre espacio parte para separar la oracion por espacios
    }
    for (var i = 0; i < input.length; i++) { // You do not need to check if i is larger than input length, as your for does that for you 
      // Assign it back to the array 
      input[i] = input[i].charAt(0).toUpperCase() + input[i].substring(1);
    } // Directly return the joined string 
    return input.join(' ');
    //coge el 
  }
});
