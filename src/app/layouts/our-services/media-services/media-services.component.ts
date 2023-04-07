import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-media-services',
  templateUrl: './media-services.component.html',
  styleUrls: ['./media-services.component.scss']
})
export class MediaServicesComponent {
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
