
var app = angular.module("Camplist",["ui.router"]);

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
            
        })
        
        
      
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
  });
  angular.module('camp', []);


  