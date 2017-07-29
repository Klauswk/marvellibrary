angular.module('marvelLibrary').directive('app', [function () {
    return {
        templateUrl: '/components/app/component.html',
        restrict: 'E',
        scope: {
            
        },
        controller: 'AppController'
    };
}]);
