    var myApp = angular.module("xyz",[]);
    myApp.controller('1Controller', function($scope, $interval) {
        $scope.array = ["Open Source", "AdSense", "FCPX", "Javascript", "ExtendScript", "Web Design", "After Effects", "Wordpress"];
        $scope.showedItem = 0;

        $interval(function() {
            $scope.showedItem = ++$scope.showedItem % $scope.array.length;
        }, 1000);

    });


    myApp.controller('2Controller', function($scope, $interval) {
        $scope.array = ["Game Of Thrones", "Cryptocurrency", "Blockchain", "Angular", "Money", "Breaking Bad", "Stranger Things", "Pizza", "Gym", "Linux", "Technology", "Tesla", "Music", "Fifa", "Distributed Systems", "Networking", "APIs"];
        $scope.showedItem = "People";

        $interval(function() {
              $scope.showedItem = $scope.array[Math.floor(Math.random()*$scope.array.length)];
        }, 1000);
    });
