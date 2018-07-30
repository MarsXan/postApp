'use strict';

angular.module('postApp.certificationIssuance', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/certificationIssuance', {
    templateUrl: 'certificationIssuance/certificationIssuance.html',
    controller: 'certificationIssuanceCtrl'
  });
}])

.controller('certificationIssuanceCtrl', [function() {

}]);