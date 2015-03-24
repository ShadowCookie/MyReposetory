'use strict';

var friKatedreCtrls = angular.module('friKatedreCtrls', []);

friKatedreCtrls.controller('kazaloCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Kazalo");
}]);

friKatedreCtrls.controller('programskaOpremaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za programsko opremo");
}]);

friKatedreCtrls.controller('racunalniskaLogikaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za računalniško logiko, sisteme in mreže");
}]);

friKatedreCtrls.controller('informatikaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za infromatiko");
}]);

friKatedreCtrls.controller('teoreticnoRacunalnistvoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za teoretično računalništvo");
}]);

friKatedreCtrls.controller('umetnaInteligencaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za umetno inteligenco");
}]);

friKatedreCtrls.controller('matematikaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.setTile("Katedra za matematiko in splošne predmete");  
}]);