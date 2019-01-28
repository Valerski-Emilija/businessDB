import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceApiservice } from '../service/service.apiservice';
import { Service } from '../app.models';
import { routeAnimationTrigger } from '../app.animations';

@Component({
  selector: 'app-serviceForm',
  templateUrl: './serviceForm.component.html',
  styles: [`:host {
    display: block;
  }`],
  animations: [
    routeAnimationTrigger
  ]
})

export class ServiceFormComponent implements OnInit {

  @HostBinding('@routeAnimationState') routeAnimation = true;

  service: Service;
  services : Service[];
  serviceForm : FormGroup;
  ID: number;
  editMode = false;
  added    = false;
  updated  = false;
  title: string;

constructor(private router: Router, private route: ActivatedRoute,
  private servapiserv: ServiceApiservice) {}


ngOnInit() {
  this.route.params
     .subscribe((params: Params) => {
       this.ID = +params['id'];
       this.editMode = params['id'] != null;
        this.servapiserv.getService(params['id'])
        .subscribe(service=> {
          this.service = service
       })
     })
     if(this.editMode) {
       this.title = "Edit Service";
     }
     else {
       this.title = "Add new Service";
     }
   this.serviceForm = new FormGroup({
     'TYPE' : new FormControl(),
     'DESCRIPTION' : new FormControl(),
     'PRICE' : new FormControl()
   });

  }

//   redirectTo(uri:string){
//   this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
//   this.router.navigate([uri]));
// }

submitForm(serviceForm = this.serviceForm){
      if (this.editMode) {
          // Edit
          this.service.TYPE = serviceForm.value.TYPE;
          this.service.DESCRIPTION = serviceForm.value.DESCRIPTION;
          this.service.PRICE = serviceForm.value.PRICE;
          this.servapiserv.editService(this.service)
           .subscribe(service => {
             this.updated = true;
             this.router.navigate(['/services'], {queryParams: {updated:this.updated}});
           });

       }

    else {
      //create
        const service = new Service(this.ID, serviceForm.value.TYPE, serviceForm.value.DESCRIPTION,
        serviceForm.value.PRICE);
        this.servapiserv.addService(service)
        .subscribe(service => {
         this.added = true;
         this.router.navigate(['/services'], {queryParams: {added:this.added}});
       });

    }
  }
}
