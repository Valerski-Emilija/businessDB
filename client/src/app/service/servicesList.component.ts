import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ServiceApiservice } from '../service/service.apiservice';
import { Service } from '../app.models';
import { routeAnimationTrigger } from '../app.animations';

@Component({
  selector: 'app-servicesList',
  templateUrl: './servicesList.component.html',
  styles: [`:host {
    display: block;
  }`],
  animations: [
    routeAnimationTrigger
  ]
})

export class ServicesListComponent implements OnInit {

  @HostBinding('@routeAnimationState') routeAnimation = true;

  services: Service[] =[];
  service: Service;
  added: boolean;
  updated: boolean;


constructor(private servapiserv: ServiceApiservice, private route: ActivatedRoute) { }

ngOnInit() {

    this.servapiserv.getServices().subscribe(
     services => {
     this.services = services;
   }
 );
    this.route.queryParams.subscribe(params => {
    this.added = params['added'];
    this.updated = params['updated'];
 });

}

Delete(service) {
     if(confirm("Are you sure?")) {
      let index = this.services.map(function(service) {
        return service["ID"];
        }).indexOf(service);
        this.services.splice(index, 1);
        this.servapiserv.DeleteService(service)
        .subscribe();
      }
  }

close(){
    this.added = false;
    this.updated = false;
  }

  }
