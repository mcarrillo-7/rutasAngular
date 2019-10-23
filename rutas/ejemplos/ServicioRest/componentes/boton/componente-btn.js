angular.
  module('componentesApp'). //nombre App
  component('componenteBtn', { //nombre componente, para usarlo poner <saludoUsuario></saludoUsuario>
    templateUrl: './componentes/boton/template.html',
    controller: function BotonController() {

        console.trace('BotonController')
      this.nombre = 'Hola, me llaman botón.';
      this.cont = 0;
      this.sumar = function(){
        this.cont++;
      }
    }
  
    
  });