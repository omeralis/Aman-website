import { ViewportScroller } from '@angular/common';
import { Component, HostListener, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  positionScroll = 4000;
  visibilityCompare: boolean = false;

  public getScreenWidth: any;
  public getScreenHeight: any;

  modalRef?: BsModalRef;
  config = {
    animated: true
  };
   
    constructor(private modalService: BsModalService , private viewportScroller: ViewportScroller) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  ngOnInit() {
  //  console.log(this.getScreenWidth = window.innerWidth);
}

  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   // this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  //   if (this.getScreenHeight - this.positionScroll) {
  //           this.visibilityCompare = true;
  //           console.log('test scroll',this.visibilityCompare);
  //   }
  //   // console.log(this.getScreenWidth = window.innerWidth);
  //   console.log(this.getScreenHeight = window.innerHeight);
  // }
  

  @HostListener('window:scroll', ['$event']) 
    scrollTop(event: any) {
      if (window.pageYOffset > this.positionScroll) {
        this.visibilityCompare = true;
        console.log(this.visibilityCompare);
        // console.log('innerWidth', window.innerWidth);
        console.log('pageYOffset',window.pageYOffset );
      } else {
        this.visibilityCompare = false;
      }
    }
    // scrollToElement(element: any): void {
    //   element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    // }
    public scroll(elementId: any): void {
      this.viewportScroller.scrollToAnchor(elementId);
    this.modalService.hide();

    }
}
