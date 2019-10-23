/**javascript para nuestra app */

var app = angular.module(
    'profesorApp', //nombre de la App
    []            //para inyectar librerias
);

/*definir controladores*/

app.controller('frutaController',       //nombre controlador
                  function($scope){          //programacion del controlador


               //variable del modelo
            
                         $scope.frutasJson = {"frutas" : [{
                            nombre: "Manzana",
                            precio: 4,
                            color:"verde",
                            cantidad:1,
                            foto: "images/manzana.png"
                        },

                        {                           
                            nombre: "Fresa",
                            precio: 7,
                            color:"rojo",
                            cantidad:1,
                            foto: "images/fresa.jpg"
                        },

                        {                            
                            nombre: "Pera",
                            precio: 3,
                            color:"verde",
                            cantidad:1,
                            foto: "images/pera.jpg"
                         }]};
            //FUNCIONES
            $scope.restar = function(frutas){
                console.debug("vamos a restar");
                frutas.cantidad--;
            }

            $scope.sumar = function(frutas){
                console.debug("vamos a sumar");
                frutas.cantidad++;
            }

            $scope.eliminar = function(frutas){
                console.debug("borrar cantidad")
                frutas.cantidad = 0;
            }

            $scope.total = function(){
                console.debug("Calculando total");

            }
            $scope.irSumando = function(){
                $scope.total += (frutas.precio * frutas.cantidad)
            }
            //TODO metodo de eliminar carrito
            $scope.eliminar = function(){
                
            }
            //TODO metodo de cambiar flecha
            $scope.cambiarFlecha = function(){

            }
            
               
});