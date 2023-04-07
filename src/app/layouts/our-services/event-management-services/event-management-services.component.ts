import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-event-management-services',
  templateUrl: './event-management-services.component.html',
  styleUrls: ['./event-management-services.component.scss']
})
export class EventManagementServicesComponent {
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
