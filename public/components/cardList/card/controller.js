angular.module('marvelLibrary').controller('CardController', ['$scope', function ($scope) {
    
    if($scope.card.card.thumbnail){
        $scope.card.card.thumbnail.path = appendSizeAndType($scope.card.card.thumbnail.path);
    }

    if(!$scope.card.card.description){
        $scope.card.card.description = 'No description provided';
    }


    function appendSizeAndType(path){
        if(path.indexOf('/standard_fantastic.jpg') > -1){
            return path;
        }
        return `${path}${'/standard_fantastic.jpg'}`;
    }
}]);