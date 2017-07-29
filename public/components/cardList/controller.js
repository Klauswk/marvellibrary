angular.module('marvelLibrary').controller('CardListController', ['$scope', function ($scope) {
    $scope.hasResult = true;
    $scope.cards = [{
        id: 581,
        title: "Thor (1998 - 2004)",
        description: "The Mighty Thunderer returns! Thor must rediscover his lost people and adjust to the challenges of ruling Asgard in this new take on a classic Marvel icon.",
        resourceURI: "http://gateway.marvel.com/v1/public/series/581",
        urls: [{
            type: "detail",
            url: "http://marvel.com/comics/series/581/thor_1998_-_2004?utm_campaign=apiRef&utm_source=22be055d4907fd0dbd1f2e345c9fc5e8"
        }],
        startYear: 1998,
        endYear: 2004,
        rating: "Marvel Psr",
        type: "ongoing",
        modified: "2016-03-23T10:39:15-0400",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/56f2aa61318e9",
            extension: "jpg"
        },
    }, {
        id: 581,
        title: "Thor (1998 - 2004)",
        description: "The Mighty Thunderer returns! Thor must rediscover his lost people and adjust to the challenges of ruling Asgard in this new take on a classic Marvel icon.",
        resourceURI: "http://gateway.marvel.com/v1/public/series/581",
        urls: [{
            type: "detail",
            url: "http://marvel.com/comics/series/581/thor_1998_-_2004?utm_campaign=apiRef&utm_source=22be055d4907fd0dbd1f2e345c9fc5e8"
        }],
        startYear: 1998,
        endYear: 2004,
        rating: "Marvel Psr",
        type: "ongoing",
        modified: "2016-03-23T10:39:15-0400",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/56f2aa61318e9",
            extension: "jpg"
        },
    }, {
        id: 581,
        title: "Thor (1998 - 2004)",
        description: "The Mighty Thunderer returns! Thor must rediscover his lost people and adjust to the challenges of ruling Asgard in this new take on a classic Marvel icon.",
        resourceURI: "http://gateway.marvel.com/v1/public/series/581",
        urls: [{
            type: "detail",
            url: "http://marvel.com/comics/series/581/thor_1998_-_2004?utm_campaign=apiRef&utm_source=22be055d4907fd0dbd1f2e345c9fc5e8"
        }],
        startYear: 1998,
        endYear: 2004,
        rating: "Marvel Psr",
        type: "ongoing",
        modified: "2016-03-23T10:39:15-0400",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/56f2aa61318e9",
            extension: "jpg"
        },
    }];

    $scope.$on('searchSubmit', function (event, info) {
        console.log(info);
        if (info.length > 0) {
            $scope.hasResult = true;
            $scope.cards = info;
        } else {
            $scope.hasResult = false;
        }
    });
}]);