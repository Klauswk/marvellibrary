angular.module('marvelLibrary').directive('cardList', [function () {
    return {
        templateUrl: '/components/cardList/component.html',
        restrict: 'E',
        scope: {
            
        },
        controller: 'CardListController'
    };
}]);
