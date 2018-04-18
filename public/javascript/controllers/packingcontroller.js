// var app = angular.module('camp', []);
// camp.controller('PackingController', function PackingController($scope) {
//     $scope.packing = [
//     {
//         name: "tent",
//     }, {
//         name: "backpack",

//     },
//     ];
// });



// var app = angular.module("Camplist", []);
// app.controller("PackingController", function ($scope, $http) {
//     $http({
//         method: "GET",
//         url: "api/camp"
//         //handels success
//     }).then(function mySuccess(response){
//         $scope.packing = response.data;
//         //handels errors
//     },function myError(response) {
//             $scope.content = response.statusText;
        
//     });
// });

// var app = angular.module("Camplist", []);
// app.controller("PackingController", function ($scope, $http) {
//     $http({
//         method: "POST",
//         url: "api/camp"
//         //handels success
//     }).then(function mySuccess(response){
//         $scope.packing = response.data;
//         //handels errors
//     },function myError(response) {
//             $scope.content = response.statusText;
        
//     });
// });