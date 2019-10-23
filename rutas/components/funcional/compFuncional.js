angular.
  module('angularApp').  
  component('componenteFuncional', {   
    templateUrl: './components/funcional/progfuncional.html',
    controller: function FMRController($scope, $http) {

      console.trace('FuncionalController');  

      $scope.contratos = {};
      $scope.contratosKT = {};
      $scope.coloresMap = [];
      $scope.contratosSituacion = {};
      $scope.contratoSaldo = [];
      $scope.coloresFilter2 = [];
      $scope.coloresReduce = 0;

      let url = 'http://localhost:3000/contratos';
      $http.get(url).then(function (result) {
          console.trace('servicio rest funcionando %o', result);
          $scope.contratos = result.data;

          $scope.contratosKT = result.data.filter(element=>element.TIPPRODUCT==='KT').map(element=>element.TIPPRODUCT);

          $scope.contratosSituacion = result.data.filter(element=>element.ACCIONES.clave==="SITUACION");

          $scope.contratoSaldo = $scope.contratos.map( e => {

            let cc = e.codContrat.toString() + e.digContrat.toString();
            if ( cc != "-" ){
                cc = "";
            }

            return {
                "codigoContrato" : cc,
                "saldo": (e.SALCONTRAT / 100)
            }

        }).filter( e => {
            return ( e.codigoContrato != "" && e.saldo > 0 ) ;
        });

        //$scope.contratosSituacion = result.data.filter(e =>{
         // return{

         //   "ACCIONES" : [
            //  {"titulo" : 'Situación',
           //   "clave" : 'Situación'
        //    }
              
         //   ]
         // }
       // });

//    });

          $scope.coloresReduce = result.data.map(element => element.precio).reduce((pv,cv) => pv+cv);
         
          $scope.coloresFilter2 = ['verde', 'verde', 'marron'].filter((item, index ,a) => a.indexOf(item)===index);{
           return a.indexOf(index)===item;
          }
      }, function (response) {
          console.warn('servicio rest fallando %o', response);
          
      });


    }})
