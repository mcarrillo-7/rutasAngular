angular.
  module('componentesApp'). //nombre App
  component('componenteLocalizacion', { //nombre componente
    templateUrl: './componentes/calificacion/template.html',
    controller: function CalificacionesController() {
        
      this.nota = 5;
      this.calificacion = 'Suficiente';
    

    this.sumar= function () {
        console.trace('sumar');
        if(this.nota < 10){
        
        this.nota++;

    }
    this.calificar();
    };

    this.restar= function () {
        console.trace();
        if(this.nota > 0){
            this.nota--;
        }
        this.calificar();
    };

    this.calificar = function(calificacion){
        if(this.nota == 0){
            this.calificacion="Suspenso";
        }
        else if(this.nota == 5){
            this.calificacion="Suficiente";
        } 
        else if(this.nota == 10){
            this.calificacion="Sobresaliente";
        }
    }
  }
});