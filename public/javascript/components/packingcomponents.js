angular.module("Camplist").component("camplist", {
    template: 
    "{{packing.list}}"
   
    

});


var app = angular.module("Camplist", []);
app.controller("PackingController", function ($scope, $http) {
    $http({
        method: "GET",
        url: "/api/camp"
        //handels success
    }).then(function mySuccess(response){
        $scope.packing = response.data;
        //handels errors
    },function myError(response) {
            $scope.content = response.statusText;
        
    });
});


