//the javascript file for my Personal Portfolio page that uses Angular and Firebase
//to display data on the html page

var myApp = angular.module('myApp', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
	$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/front.html'
    })
	.state('about', {
		url:'/about',
		templateUrl:'templates/about.html',
	})
	.state('projects', {
		url:'/projects',
		templateUrl:'templates/projects.html',
		controller:'ProjectsController',
	})
    .state('projects.spotify', {
        url:'/spotify',
        templateUrl:'templates/spotify.html'
    });
})

//controller for the projects page
.controller('ProjectsController', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
	var ref = new Firebase('https://personal-portfolio117.firebaseio.com/');
    var projectInfoRef = ref.child("projectInfo");
    $scope.projectInfo = $firebaseArray(projectInfoRef);

    $scope
});