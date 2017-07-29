angular.module('marvelLibrary').directive('card', [function () {
    return {
        templateUrl: '/components/cardList/card/component.html',
        restrict: 'E',
        scope: {
            card:'=',
        },
        controller: 'CardController'
    };
}]);
