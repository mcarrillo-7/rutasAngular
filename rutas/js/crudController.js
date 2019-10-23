app.controller('crudController', ['$scope', 'cancionProvider', function($scope, cancionProvider){


    console.trace('crudController');
    $scope.titulo ="spotify Premium";
    $scope.nombre ="";
    $scope.canciones =[];
    $scope.alerta = {};
    $scope.cancionEditar = {};

    //Eventos
    this.$onInit = function(){
        console.trace('crudController onInit'); 

        /*
        TODO ponerlo donde sea neceario
        cancionProvider.listar();
        cancionProvider.detalle(1);
        cancionProvider.eliminar(2);
        cancionProvider.crear("Mockito");
        cancionProvider.modificar(1,"Cambiada Cancion 1");
        */

     
        $scope.refrescar();



    };    
//Funciones

$scope.refrescar = function(){
    let promesa = cancionProvider.listar();           
    promesa.then( 
        response=>{
            console.debug('Llamada Rest OK %o', response);
            $scope.canciones = response.data;
        },
        response=>{
            console.warn('Llamada Rest ERROR %o', response);
        }
    )
 }   
    
 $scope.nuevaCancion = (nombre) => {
        let p = cancionProvider.crear(nombre);
        p.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.nombre="";
                $scope.alerta = {
                    "texto": "Registrado!",
                    "clase": "success"
                }
            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.alerta = {
                    "texto": "Error al guardar los cambios",
                    "clase": "danger"
                }
            }
        )
    };

$scope.eliminarC = (c) => {
    console.trace('click eliminar %o', c);
        if ( confirm('¿Estas Seguro?') ){

            cancionProvider.eliminar(c.id).then(
                (response)=>{
                    console.debug('llamada correcta %o', response);
                    $scope.refrescar();                   
                    $scope.alerta = {
                        "texto": "Registrado!",
                        "clase": "success"
                    }
    
                },
                (response)=>{
                    console.warn('llamada INcorrecta %o', response);
                    $scope.alerta = {
                        "texto": "Error al guardar los cambios!",
                        "clase": "danger"
                    }
                }
            );
        }// confirm
    };
    
$scope.cambiar = (cancion)=> {$scope.cancionEditar = cancion};

$scope.editar = () => {
        let pModificar = cancionProvider.modificar($scope.cancionEditar );
        pModificar.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.nombre="";
                $scope.alerta = {
                    "texto": "Elemento modificado con éxito!",
                    "clase": "success"
                }
            },
            (response)=>{
                console.warn('llamada Incorrecta %o', response);
                $scope.alerta = {
                    "texto": "Error al modificar",
                    "clase": "danger"
                }
            }
        )
    }


    
}]);