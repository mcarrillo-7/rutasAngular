(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', '$timeout', function($scope,$http, $timeout){
  
  $scope.profesores = {}; //definimos la variable de profesores

    //peticion httprequest mediante ajax, es ASINCRONA
    console.debug('llamada asincrona')

    $timeout(function(){
        $http.get('json/profesores.json').success(function(data){
            console.trace('response OK %o ', data);
            $scope.profesores = data;
    }),3000

    })
  
    console.debug('SEGUIMOS EJECUTANDO OTRAS SENTENCIAS')


}]);





})();
