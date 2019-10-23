app.controller('promesasController', ['$scope', '$http', '$q', '$timeout', function($scope, $http, $q, $timeout){


    console.trace('promesasController');
    $scope.titulo ="Promesas -- Ejercicio";
    $scope.sumar1 = "sumando";
    $scope.sumar2 = "sumando";

    /**
     * funcion asincrona que retorna una promesa
     * usamos $q para el asincronismo, puesto que js es sincrono
     * 
     * @param numero: entero a sumarle uno
     * @param fallo: boolean para hacer que funcione o falle la promesa
     */
    $scope.sumar = function(numero1, numero2, fallo, espera){

        console.trace("sumar");
        var q = $q.defer();
        $timeout(function(){
            if(!fallo){
                let num = numero1+numero2;
                q.resolve(num++);
            } else{
                q.reject('Lo sentimos, pero fallo')
            }
        }, espera);
        

        return q.promise;
    }//sumar


//llamamos a la funcion asincrona

$scope.sumar (2, 3, false, 2000).then(function(result){
    console.debug('promesa cumplida resultado %o', result);
}).catch(function(response){
    console.debug('promesa rejectada %o', result);
});

//volvemos a llamar
$scope.p2 = $scope.sumar( 5, 5 , false, 5000 );
$scope.p2.then(function (result) {
    console.debug('promesa cumplida resultado %o', result);

}).catch(function (result) {
    console.debug('promesa rejectada %o', result);

});


}]);