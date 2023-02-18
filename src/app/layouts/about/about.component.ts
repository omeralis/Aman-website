import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  positionScroll =550;
  visibilityCompare: boolean = false;

  // @HostListener('document:mousewheel', ['$event'])
  @HostListener('window:scroll', ['$event']) 
  scrollTop(event: any) {
    if (window.pageYOffset > this.positionScroll) {
      this.visibilityCompare = true;
      console.log(this.visibilityCompare)
    } else {
      this.visibilityCompare = false;
    }
  }
  scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}
