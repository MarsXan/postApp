///Config
postApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/certificationIssuance/certificationIssuance.html',
            controller: 'certificationIssuanceCtrl'
        })
        .when('/certificationIssuance', {
            templateUrl: 'pages/certificationIssuance/certificationIssuance.html',
            controller: 'certificationIssuanceCtrl'
        })
        .when('/findPostcode', {
            templateUrl: 'pages/findPostcode/findPostcode.html',
            controller: 'findPostcodeCtrl'
        })
});