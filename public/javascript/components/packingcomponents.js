// angular.module("app").component("app", {
//     template: 
//     "{{camp.list}}"
   
    

// });

// app.controller(
//     "PackingController", 
//     [ "$scope" ,function ($scope, $http) {
        
// }]);

class PackingController {
    constructor($http){
        this.pack = "are you here";
        this.packing = $http({
            method: "GET",
            url: "/api/camp"
            //handels success
        }).then(function mySuccess(response){
            console.log(response.data);
            return response.data;
            
            //handels errors
        },function myError(response) {
                return response.statusText;
            
        });
        this.packinglist = this.packing;
        console.log(this.packing);
    }
}


