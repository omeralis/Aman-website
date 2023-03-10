import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  options = {
    fpsLimit: 60,
    particles: {
      fullScreen: {
        enable: false
      },
      color: {
        value: "#000"
      },
      links: {
        enable: true,
        color: "#fff"
      },
      move: {
        enable: true
      }
    }
  };
}
