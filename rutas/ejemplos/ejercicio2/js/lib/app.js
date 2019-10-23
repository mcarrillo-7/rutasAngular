/**javascript para nuestra app */

var app = angular.module(
    'profesorApp', //nombre de la App
    []            //para inyectar librerias
);

/*definir controladores*/

app.controller('profesorController',       //nombre controlador
                  function($scope){          //programacion del controlador


               //variable del modelo
               $scope.timeout = 1000;
               $scope.mostrarCaja = false;
               $scope.animacion ="animated rollIn";
               $scope.editando = {};
                         $scope.profesor = {
                            nombre: "Thomas Shelby",
                            bio: "Encantado de conocerte. Soy un gipsy muy peligroso. Pero sobre todo Do not fuck the Peaky fucking Blinders",
                            edad: 29,
                            foto: "images/shelby.jpg"
                        };

                //funciones
                $scope.editar =function(){
                    console.trace('click boton editar');
                    $scope.mostrarCaja = true;
                    $scope.animacion="animated rollIn";
                    angular.copy($scope.profesor, $scope.editando)
                }
                $scope.cancelar =function(){
                    console.trace('click boton cancelar');
                        $scope.editando ={}
                        //$scope.mostrarCaja = false;
                        $scope.animacion="animated bounceOut";
                }
                $scope.guardar =function(){
                    console.trace('click boton guardar');
                    angular.copy($scope.editando, $scope.profesor)
                    $scope.animacion="animated rollOut";
                    $scope.mostrarCaja = false;
                }
               
});

/****************************** */

app.controller('videoController',       //nombre controlador
                  function($scope){          //programacion del controlador

                //variable del modelo
                $scope.timeout = 2000;
                $scope.animacion ="animated rollIn";
                     $scope.video = {
                            titulo: "SKA-P",
                            codigo: "M8SoQAeUt_A",
                            edad: 29,
                            url: "https://www.youtube.com/watch?v=M8SoQAeUt_A",
                            categoria: {
                                id: 3,
                                nombre: "Musica"
                            },
                            usuario: {
                                nombre: "Ramoncion",
                                id: 23
                            },
                            megusta : 3
                        };

                //FUNCIONES

                //funcion para cada vez que le demos like se anime el boton y se reinicie la animacion cada 1000 ms (1 segundo)
                $scope.sumarLikes = function(){
                    console.trace('click boton likes');
                    $scope.video.megusta++;
                    $scope.animation ="animated flash";
                    $timeout(function(){
                        $scope.animation="";
                    }, 1000);
                }
});

app.controller('animalesController',       //nombre controlador
                  function($scope){          //programacion del controlador

                //variable del modelo
                $scope.animales = ["Perro",  "Abeja","Gato", "Oso", "Serpiente"]
                $scope.animalesJson([
                    {"nombre":"perro",
                     "color":"blanco"},

                    {"nombre":"gato",
                     "color":"negro"},

                    {"nombre":"serpiente",
                     "color":"verde"}
                ]);     

                //FUNCIONES
                    $scope.selec = function(animal){
                        console.debug("Escogiste " + animal)
                        event.target.style.background="red";
                    }
               
});