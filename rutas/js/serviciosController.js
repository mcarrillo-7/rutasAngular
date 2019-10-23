app.controller('serviciosController', ['$scope', 
                                        '$http',  
                                        '$log', 
                                        'serviciosConstantes', 
                                        'rectangulo',
                                        'rectangulo2', 
                                        function($scope, 
                                            $http, 
                                            $log, 
                                            serviciosConstantes, 
                                            rectangulo,
                                            rectangulo2){


    
    $scope.titulo = "Servicios " + serviciosConstantes.idioma;
    $scope.autor = serviciosConstantes.autor;
    $scope.github = serviciosConstantes.github;
    //$log.trace('serviciosController con log');
    
    //usamos el servicio Rectángulo
    rectangulo.setAncho(3);
    rectangulo.setAlto(2);
    $scope.area = rectangulo.getArea();

    $scope.area2 = rectangulo2.getArea();



}]);