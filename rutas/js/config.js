
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        templateUrl: 'parciales/frutas.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when("/filtermapreduce",{
      template: '<componente-Filtermapreduce></componente-Filtermapreduce>'
    })
    .when("/progfuncional",{
      template: '<componente-Funcional></componente-Funcional>'
    })
    .when("/promesas",{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/canciones',{
     templateUrl: 'parciales/listaCanciones.html'
    })
    .when('/formulario',{
     templateUrl: 'parciales/formulario.html'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html'
     })
    .when("/detalle/:id",{
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .otherwise({
      redirectTo: '/'
    })

})
