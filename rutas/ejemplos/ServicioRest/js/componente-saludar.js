angular.
  module('componentesApp').
  component('saludoUsuario', {
    template: 'Eeeeyyy, {{$ctrl.user}}',
    controller: function SaludoUsuarioController() {
      this.user = '¿Qué pasa chavales? ¿Todo bien? ¿Todo correcto? Y yo que me alegro!';
    }
  });

