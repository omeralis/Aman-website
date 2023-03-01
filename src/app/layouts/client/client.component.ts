import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  //this is a variable that hold number
  projectCount: number = 0;
  //same process
  accurateCount: number = 0;
  clientCount: number = 0;
  customerFeedback: number = 0;
  responseData: any;
  clientData: any;
  projectData: any;
  constructor(
    private ApiService: ApiServicesService
  ) { }

  ngOnInit(): void {
    this.gteClient()
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

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectCountStop.
  projectCountStop: any = setInterval(() => {
    this.responseData.map((res: any) => {
      if (res.id == 1) {
        this.clientData = res
      }
    })
    this.projectCount++;
    //we need to stop this at  particular point; will use if condition
    console.log(this.clientData.count)
    if (this.projectCount == this.clientData.count) {
      //clearinterval will stop tha function
      clearInterval(this.projectCountStop);
    }

  }, 10) //10 is millisecond you can control it


  accurateCountStop: any = setInterval(() => {
    this.responseData.map((res: any) => {
      if (res.id == 2) {
        this.projectData = res
      }
    })
    this.accurateCount++;
    if (this.accurateCount == this.projectData.count) {

      clearInterval(this.accurateCountStop);
    }
  }, 10)


  clientCountStop: any = setInterval(() => {
    this.responseData.map((res: any) => {
      if (res.id == 1) {
        this.clientData = res
      }
    })
    this.clientCount++;
    if (this.clientCount ==  this.clientData.count) {

      clearInterval(this.clientCountStop);
    }
  }, 10)

  customerFeedbackStop: any = setInterval(() => {
    this.responseData.map((res: any) => {
      if (res.id == 2) {
        this.projectData = res
      }
    })
    this.customerFeedback++;
    if (this.customerFeedback == this.projectData.count) {

      clearInterval(this.customerFeedbackStop);
    }
  }, 10)

}
