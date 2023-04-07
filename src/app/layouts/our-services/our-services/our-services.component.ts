import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  constructor(
    private service :ApiServicesService
  ){
    
  }
  ngOnInit(): void {
  this.service.HeaderSubject.next(true);
  }
}
