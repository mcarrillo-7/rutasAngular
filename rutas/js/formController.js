
app.controller('formController', ['$scope', 'servicioConstantes',
                                      function($scope, servicioConstantes){


    console.trace('formularioController');    

    $scope.titulo = "Formularios";
    $scope.formulario = {
        "email" : servicioConstantes.email,
        "nombre" : servicioConstantes.autor
    };

    $scope.postear = ()=>{

        console.trace('formulario sumitado %o', $scope.formulario );
    }

}]);