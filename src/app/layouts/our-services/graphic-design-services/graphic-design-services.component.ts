import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-graphic-design-services',
  templateUrl: './graphic-design-services.component.html',
  styleUrls: ['./graphic-design-services.component.scss']
})
export class GraphicDesignServicesComponent {
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
