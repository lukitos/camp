import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import {HomeController} from './controllers/homecontroller';

var app = angular.module("Camplist",["ui.router"]);
app.controller("HomeController", HomeController);

app.config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: HomeController,
      controllerAs: 'ctrl'  
  })
        .state('about', {
            url: '/about',
            templateUrl: '/templates/about.html',
            controller: HomeController,
            controllerAs: 'ctrl'  
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/templates/contact.html',
            controller: HomeController,
            controllerAs: 'ctrl'  
        })
        .state('packing', {
            url: '/packing',
            templateUrl: '/templates/packing.html' ,
            controller: HomeController,
            controllerAs: "ctrl"
        })
        
        
      
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);
  });