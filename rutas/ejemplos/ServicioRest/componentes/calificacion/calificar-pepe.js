angular.
  module('componentesApp'). //nombre App
  component('componenteNotasPepe', { //nombre componente
    templateUrl: './componentes/calificacion/template2.html',
    bingings:{
        pnota:'@' //parámetro de entrada que es un atributo
    },
    controller: function CalificacionesController() {
        const NOTA_MIN = 0;
        const NOTA_MAX = 10;
        this.nota = 5;
        this.calificacion = 'Suficiente';
    this.$onIniy = function(){
        console.trace('CalificacionController init');
        this.nota = this.pnota;
    }

    this.sumar= function () {
        console.trace('sumar');
        if(this.nota < NOTA_MAX){
        
        this.nota++;

    }
    this.calificar();
    };

    this.restar= function () {
        console.trace();
        if(this.nota > NOTA_MIN){
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
    this.cambiar = function(){
        switch (this.nota){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                this.calificacion = "F";
                break;

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                this.calificacion="Aprobado";
                break;

            case 10:
                this.calificacion = "Sobresaliente";
                break;
        }
    }

    this.defecto = function(notaHTML, notaCSS, notaJS, notaAngular){
        this.notaHTML = 5;
        this.notaCSS = 8;
        this.notaJS = 7;
        this.notaAngular = 3;

        return notaHTML;
        return notaCSS;
        return notaJS;
        return notaAngular;

    }
  }
});