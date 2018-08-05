'use strict';

angular.module('postApp.findPostcode', ['ngRoute'])
    .controller('findPostcodeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.postCode = "";
        $scope.adresses = [];
        $scope.mValues = [];
        $scope.keys = [];
        $scope.getCityName = function () {
            $http({
                method: 'GET',
                url: 'http://192.168.100.106:8080/testWebService'
            }).then(function successCallback(response) {
                $scope.adresses = response.data


            }, function errorCallback(response) {
                alert(response.status)
            });
        };

        $scope.getObjectKeys = function (obj) {
            return Object.keys(obj);
        };

        $scope.getObjectValues = function (obj) {
            return Object.values(obj);
        }

    }])
;