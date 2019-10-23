angular.
  module('angularApp').  
  component('componenteFiltermapreduce', {   
    templateUrl: './components/filtermapreduce/filtermapreduce.html',
    controller: function FMRController($scope, $http) {

      console.trace('FMRController');  

      $scope.coloresMap = [];
      $scope.coloresFilter = [];
      $scope.coloresFilter2 = [];
      $scope.coloresReduce = 0;

      let url = 'http://localhost:3000/frutas';
      $http.get(url).then(function (result) {
          console.trace('servicio rest funcionando %o', result);
          $scope.frutas = result.data;
          $scope.coloresMap = result.data.map(elem=>elem.color);
          $scope.coloresReduce = result.data.map(element => element.precio).reduce((pv,cv) => pv+cv);
          $scope.coloresFilter = result.data.filter(element=>element.precio>2).map(element=>element.nombre);
          $scope.coloresFilter2 = ['verde', 'verde', 'marron'].filter((item, index ,a) => a.indexOf(item)===index);{
            return a.indexOf(index)===item;
          }
      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          
    });



    }// controlador

  });