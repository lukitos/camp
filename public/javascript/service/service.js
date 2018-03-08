export class CampService {

    constructor($resource, $http) {
        this.GetCampResource = $resource("/api/camp");
        this.CampDeleteResource = $resource("/api/camp/:id");
        this.CampAddResource = $resource("/api/camp/add");
        this.CampEditResource = $resource("/api/camp/edit/:id");

    }

    getCamp() {
        return this.GetCampResource.query();
    }

    addCamp(camp) {
        return this.CampAddResource.save(camp).$promise;
    }

    deleteCamp(_id) {
        return this.CampDeleteResource.delete({id: _id}).$promise;
    }

    editCamp(camp, id) {
        return this.CampEditResource.save({id: _}, camp).$promise;
    
    }
}

CampService.$inject = [ "$resource", "$http"];