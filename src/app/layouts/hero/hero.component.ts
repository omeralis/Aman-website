import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit,AfterViewInit  {
  @ViewChild('myVideo') myVideo = {} as ElementRef ;
  // @ViewChild('myVideo2') myVideo2: ElementRef | any;
  isPlay: boolean = false;
  isPlayAudio: boolean = false;
  visibilityCompare: boolean = false;
  isMobileResolution = false;
  // isDesktopResolution: boolean;
  videoUrl: String = "";
  images = [8, 9, 10].map((n) => `../../../assets/img/Hero/${n}.jpg`);

  constructor(private viewportScroller: ViewportScroller) {

  }
  ngAfterViewInit(): void {
      // this.myVideo.nativeElement.play();
      // this.playVideo();
    }
  ngOnInit(): void {
    // this.playVideo();
    console.log('window.innerWidth +=1;', window.innerWidth+1);
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      this.videoUrl = '../../../assets/video/mobile.mp4'
      console.log('width -<', window.innerWidth, this.isMobileResolution);

    } else {
      this.isMobileResolution = false;
      this.videoUrl = '../../../assets/video/desketop.mp4'
      console.log('width ->', window.innerWidth, this.isMobileResolution);
    // this.myVideo.nativeElement.play();

    }
    if (this.isMobileResolution) {
      this.videoUrl = '../../../assets/video/mobile.mp4'
      // this.myVideo.nativeElement.play();
    } else {
      this.videoUrl = '../../../assets/video/desketop.mp4'
      // this.myVideo.nativeElement.play();
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('host', event.target.innerWidth);
    if (event.target.innerWidth < 768) {
      this.isMobileResolution = true;
      this.videoUrl = '../../../assets/video/mobile.mp4'
      console.log('width -<', event.target.innerWidth, this.isMobileResolution)
    } else {
      this.isMobileResolution = false;
      this.videoUrl = '../../../assets/video/desketop.mp4'
      console.log('width ->', event.target.innerWidth, this.isMobileResolution)
    }

  }


  playVideo() {
    // if (!this.isPlay) this.isPlay = false;
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.myVideo.nativeElement.pause();
    } else {
      this.myVideo.nativeElement.play();
    }
  }
  playVideoAudio(){
    // if (!this.isPlayAudio) this.isPlayAudio = false;
    this.isPlayAudio = !this.isPlayAudio;
    if (this.isPlayAudio) {
      this.myVideo.nativeElement.muted = true ;
    } else {
      this.myVideo.nativeElement.muted = false ;
    }
  }
  @HostListener('document:mousewheel', ['$event'])
  // scrollToElement(element: any): void {
  //   element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  // }
  public scroll(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }
}
