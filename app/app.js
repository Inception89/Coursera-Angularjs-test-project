(function () {
    'use strict'

    angular.module('RoutingApp', ['ui.router']);

    angular.module('RoutingApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/tab1');

        $stateProvider
            .state('tab1', {
                url: '/tab1',
                templateUrl: 'app/tab1.html'
            })
            .state('tab2',{
                url: '/tab2',
                templateUrl: 'Views/tab2.html'
            })
    }


    /*app.controller('MyFirstController', ['$scope', '$location', function ($scope, $location) {
        $scope.click = function () {
            $location.path('forms')
        }
        $scope.name = "john";
        $scope.data = [
            { name: "firstname", area: "somewhere" },
    
        ]
    }]);*/

})();
