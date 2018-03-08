export class CampController {
    constructor(CampService, $state) {
        this.$state = $state;
        this.campService = CampService;
        this.camp = CampService.getCamp();
    }

    addCamp(title, details) {
        let camp = {
            title: title,
            details: details
        }
        this.campService.addCamp(camp);
        this.camp.push(camp);
    }

    deleteCamp(_id) {
        console.log(_id) 
            this.campService.deleteCamp(_id);
                for(let i=o; i < this.camp.length; i++) {
                    if(this.camp[i]._id == _id) {
                        this.camp.splice(i, 1);

                }
                    
             }
         }
    }

TodoController.$inject = ['TodoService', '$state'];

export class AboutController {
  constructor() {
    this.message = 'About Us'
  }
}
        
    
