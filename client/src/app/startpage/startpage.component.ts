import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimationTrigger } from '../app.animations';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
  animations: [
    routeAnimationTrigger
  ]
})
export class StartpageComponent implements OnInit {

 @HostBinding('@routeAnimationState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
