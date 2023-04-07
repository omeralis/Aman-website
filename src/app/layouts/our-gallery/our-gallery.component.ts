import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.scss']
})
export class OurGalleryComponent {
  constructor(
    private service :ApiServicesService
  ){
    
  }
  ngOnInit(): void {
  this.service.HeaderSubject.next(true);
  }
}
