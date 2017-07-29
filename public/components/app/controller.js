angular.module('marvelLibrary').controller('AppController', ['$http','$scope', function ($http, $scope) {
    var vm = this;
    vm.search = search;


    function search(query) {
        $http({
            method: 'GET',
            url: '/api/getByName/' + query,
        }).then(function successCallback(response) {
            $scope.$broadcast('searchSubmit',response.data);
        }, function errorCallback(response) {
            $scope.$broadcast('searchSubmit',[]);
        });
    }
}]);
