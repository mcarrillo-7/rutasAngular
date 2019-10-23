/**
 * Controlador principal
 */
app.controller('mainCtrl', ['$scope','$http', 'serviciosConstantes', function($scope,$http, $serviciosConstantes){

    this.$onInit = function(){
  
      console.log('onInit mainCtrl');
      $scope.const = $serviciosConstantes;
      $scope.alerta = {
        "texto" : "Ongi Etorri",
        "clase" : "primary"
      };
  
  
      // check para saber si esta el servicio rest levantado
      let url = 'http://localhost:3000/frutas';
      $http.get(url).then(function (result) {
          console.trace('servicio rest funcionando %o', result);
          $scope.alerta = {
            "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
            "clase" : "success"
          };
  
  
      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          $scope.alerta = {
            "texto" : "<strong>Upssssss</strong> Servicio Rest parado",
            "clase" : "danger"
          };
      });
  
      
  
    };//onInit
  
    $scope.frutas = {};
  
    $scope.coloreh = {};
  
    $scope.pos = 2;
  
    let url = 'http://localhost:3000/frutas';
    $http.get(url).then(function (result) {
        console.trace('servicio rest funcionando %o', result);
        $scope.frutas = result.data;
        $scope.coloreh = result.data.map(elem=>elem.color);
        
        $scope.colour = ['verde', 'verde', 'marron'].filter((item, index ,a) => a.indexOf(item)===index);{
          return a.indexOf(index)===item;
        }
    }).catch(function (response) {
        console.warn('servicio rest fallando %o', response);
        
  });
  
    $scope.anterior = function(){
      if($scope.frutas.length >= $scope.pos){
        $scope.pos += 2;
      }
    };
  
    $scope.posterior = function(){
      if($scope.pos > 2){
        $scope.pos -= 2;
      }
    }
  }]);