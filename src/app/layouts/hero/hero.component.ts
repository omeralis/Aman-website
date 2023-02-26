import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @ViewChild('myVideo') myVideo: ElementRef | any;
  isPlay: boolean = false;

  images = [8, 9, 10].map((n) => `../../../assets/img/Hero/${n}.jpg`);

  playVideo() {
    if (!this.isPlay) this.isPlay = false;
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.myVideo.nativeElement.pause();
    } else {
      this.myVideo?.nativeElement.play();
    }
  }
}
