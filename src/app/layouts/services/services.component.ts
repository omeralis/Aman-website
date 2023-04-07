import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    AOS.init();
  }
  // options = {
  //   fpsLimit: 60,
  //   particles: {
  //     fullScreen: {
  //       enable: false
  //     },
  //     color: {
  //       value: "#000"
  //     },
  //     links: {
  //       enable: true,
  //       color: "#fff"
  //     },
  //     move: {
  //       enable: true
  //     }
  //   }
  // };

  navigation() {

    // this.router.navigate(['/our-media']);
    // window.scroll({ 
    //   top: 0, 
    //   behavior: 'smooth' 
    // });
  }

}
