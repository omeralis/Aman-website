import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-website-services',
  templateUrl: './website-services.component.html',
  styleUrls: ['./website-services.component.scss']
})
export class WebsiteServicesComponent {
  constructor(
    private service :ApiServicesService
  ){
    
  }
  ngOnInit(): void {
  this.service.HeaderSubject.next(true);
  }
  // navigation(){
  //   window.scroll({ 
  //     top: 0, 
  //     // behavior: 'smooth' 
  //   });
  // }
}
