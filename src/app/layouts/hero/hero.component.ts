import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
	images = [8, 9, 10].map((n) => `../../../assets/img/Hero/${n}.jpg`);

}
