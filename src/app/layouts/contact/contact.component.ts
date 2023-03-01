import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  myForm: FormGroup = this.fb.group({});
  constructor(
    private fb: FormBuilder,
    private ApiService: ApiServicesService
  ){}

  ngOnInit(): void {
    this.FormContact();
  }
  private FormContact(): void {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
    // add Contact
    onSubmitContact() {
      console.log(this.myForm);
      
      this.ApiService.addContact(this.myForm.value).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (error) => {
          console.log('error', error);
        },
        complete: () => {
          this.myForm.reset();
        },
      });
    }

}
