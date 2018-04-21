
var app = angular.module("app",["ui.router"]);
app.controller("PackingController", PackingController);

app.config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
      
  })
        .state('about', {
            url: '/about',
            templateUrl: '/templates/about.html',
            
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/templates/contact.html',
        })
        .state('packing', {
            url: '/packing',
            templateUrl: '/templates/packing.html' ,
            controller: PackingController,
            controllerAs: "controller"
            
        })
        
        
      
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
  });
//   angular.module('camp', []);


  