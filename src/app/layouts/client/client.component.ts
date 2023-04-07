import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  // @ViewChild('maxCount') maxCount = {} as ElementRef ;

  //this is a variable that hold number
  projectCount: number = 0;
  //same process
  accurateCount: number = 0;
  clientCount: number = 0;
  customerFeedback: number = 0;
  responseData: any;
  clientData: any;
  projectData: any;
  positionScroll = 1500;
  positionscr = false;
  maxCount = 0;
  constructor(
    private ApiService: ApiServicesService, private _el: ElementRef,
  ) { }

  ngOnInit(): void {
    // this.gteClient();
    // this.scrollTop()
  }

  gteClient() {
    this.ApiService.getClient()
      .subscribe({
        next: (res) => {
          this.responseData = res;
          console.log('this.responseData', this.responseData);
        },
        error: (error) => {
          console.log('error', error);
        },
        complete: () => {
        },
      });
  }

  // @HostListener('document:mousewheel', ['$event'])
  @HostListener('window:scroll', ['$event'])
  scrollTop() {
    if (window.pageYOffset > this.positionScroll) {
      console.log('test1')
      this.positionscr = true
    } else {
      this.positionscr = false
    }
  }

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectCountStop.


  projectCountStop: any = setInterval(() => {
    // this.responseData.map((res: any) => {
    //   if (res.id == 1) {
    //     this.clientData = res
    //   }
    // })

    if (window.scrollY >= this._el.nativeElement.offsetTop) {
      this.projectCount++;
      if (this.projectCount == 50) {
        // if (this.projectCount == this.clientData.count) {
        //clearinterval will stop tha function
        clearInterval(this.projectCountStop);
      }
    }

  }, 10) //10 is millisecond you can control it


  accurateCountStop: any = setInterval(() => {
    // this.responseData.map((res: any) => {
    //   if (res.id == 2) {
    //     this.projectData = res
    //   }
    // })
    if (window.scrollY >= this._el.nativeElement.offsetTop) {
      this.accurateCount++;
      if (this.accurateCount == 90) {
        // if (this.accurateCount == this.projectData.count) {

        clearInterval(this.accurateCountStop);
      }
    }
  }, 10)


  clientCountStop: any = setInterval(() => {
    // this.responseData.map((res: any) => {
    //   if (res.id == 1) {
    //     this.clientData = res
    //   }
    // })
    if (window.scrollY >= this._el.nativeElement.offsetTop) {
      this.clientCount++;
      if (this.clientCount == 100) {
        // if (this.clientCount ==  this.clientData.count) {

        clearInterval(this.clientCountStop);
      }
    }
  }, 10)

  customerFeedbackStop: any = setInterval(() => {
    // this.responseData.map((res: any) => {
    //   if (res.id == 2) {
    //     this.projectData = res
    //   }
    // })
    if (window.scrollY >= this._el.nativeElement.offsetTop) {
      this.customerFeedback++;
      if (this.customerFeedback == 200) {
        // if (this.customerFeedback == this.projectData.count) {

        clearInterval(this.customerFeedbackStop);
      }
    }
  }, 10)

}
