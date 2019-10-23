angular.
  module('tareasApp'). //nombre App
  component('listatareas', { //nombre componente, para usarlo poner <saludoUsuario></saludoUsuario>
    templateUrl: './componentes/template_lista.html',
    controller: function BotonController($scope, $http) {

        console.trace('Listado tareas Controller')
        $scope.titulo ="Listado de tareas";
        $scope.tareas = [ ];
        $scope.nuevaTarea = "";
        $scope.mensajeValidar = "";
        $scope.ENDPOINT = 'http://localhost:3000/tareas/'

        this.$onInit=function(){
            console.trace('onInit');
            $http.get($scope.ENDPOINT).then(function(response){
                console.trace('Peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;
            }, function(response){
                console.warn('Tenemos un ERROR response: %o' , response);
            }
            );
                
            
        
    };
        $scope.crearTarea = function(){
            console.trace('crear nueva tarea con descripcion:' + $scope.nuevaTarea);
            let descripcion = $scope.nuevaTarea.trim();
            if(descripcion.length <=2){
                $scope.mensajeValidar = "Por favor escrive una descripcion mas larga"
            } else{
                console.trace('llamada post');

                let data = {
                    "completada": false,
                    "descripcion": descripcion
                };
                $http.post($scope.ENDPOINT, data).then(function(response){
                    console.trace('response ok data=%o', $scope.ENDPOINT, response);
                }, function(response){
                    console.warn('tenemos un ERROR response %o' + response);
                });
            }
        },//crearTarea

        $scope.eliminarTarea = function(tarea){
            console.trace('eliminar' , tarea)
            let url = $scope.ENDPOINT + tarea.id;
            $http.delete(url).then(function(response){

                console.trace('reponse OK data=%o', response);  
            }, function(response){
                console.warn('tenemos un ERROR response %o' + response);
            }
            )
        },

        $scope.editarTarea = function(tarea){
            console.trace('modificar objeto', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            $http.put(url).then(function(response)
            {
                console.trace('reponse OK data=%o', response);
            }, function(response){
                console.warn('tenemos un ERROR response %o' + response);
            }
            )
        }
  
    
  }
});
  