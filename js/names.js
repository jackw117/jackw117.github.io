var myApp = angular.module('myApp', []);

var myCtrl = myApp.controller('myCtrl', function($scope) {

	$scope.membersArray = ["Adam Ku", "Steven Anderson", "Martin Mathay", "Sven Hansen", "Jason Waataja", "Kevin Veith", "Nikolai Scheel", "Chris White", "Elizabeth Giacobbi", "Megan McCarthy", "Ben Smith"];

	$scope.getNames = function() {
		if ($scope.membersArray.length != 0) {
			$scope.random = Math.floor(Math.random() * $scope.membersArray.length);
			$scope.winner = $scope.membersArray[$scope.random];
			//var index = $scope.membersArray.indexOf($scope.membersArray[$scope.random]);
			//if (index > -1) {
				$scope.membersArray.splice($scope.random, 1);
			//}
			console.log($scope.random);
			console.log($scope.membersArray);
		} else {
			$scope.winner = "No more members"
		}
		$scope.winnerClick = true;
	}
});
