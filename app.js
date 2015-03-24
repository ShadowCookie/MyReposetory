'use strict';

var friKatedreApp = angular.module('friKatedre', [
  'ngRoute',
  'friKatedreCtrls'
]);
        
friKatedreApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/', {
            controller: 'kazaloCtrl',
            templateUrl: 'views/kazalo.html'
        })
        .when('/programska-oprema', {
            controller: 'programskaOpremaCtrl',
            templateUrl: 'views/programskaOprema.html'
        })
        .when('/racunalniska-logika', {
            controller: 'racunalniskaLogikaCtrl',
            templateUrl: 'views/racunalniskaLogika.html'
        })
        .when('/informatika', {
            controller: 'informatikaCtrl',
            templateUrl: 'views/informatika.html'
        })
        .when('/teoreticno-racunalnistvo', {
            controller: 'teoreticnoRacunalnistvoCtrl',
            templateUrl: 'views/teoreticnoRacunalnistvo.html'
        })
        .when('/umetna-inteligenca', {
            controller: 'umetnaInteligencaCtrl',
            templateUrl: 'views/umetnaInteligenca.html'
        })
        .when('/matematika', {
            controller: 'matematikaCtrl',
            templateUrl: 'views/matematika.html'
        })
        .otherwise({redirectTo: '/'});
}]);

friKatedreApp.run( [ '$rootScope', '$location', function( $rootScope, $location ) {
    $rootScope.isActive = function (url) {
        if ($location.path().indexOf(url) !== -1) return true;
        else return false;
    };
    
    $rootScope.setTile = function(title) {
        $rootScope.title = title;
    };
}]);
