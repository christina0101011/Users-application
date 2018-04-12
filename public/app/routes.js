angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/pages/login.html'
        })
        .when('/login', {
            templateUrl: 'app/views/pages/login.html'
        })
        .when('/enter', {
            templateUrl: 'app/views/pages/user.html'
        })
        .when('/register', {
            templateUrl: 'app/views/pages/users/register.html',
            controller: 'regUser',
            controllerAs: 'register'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});