import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteServicesComponent } from './website-services.component';

describe('WebsiteServicesComponent', () => {
  let component: WebsiteServicesComponent;
  let fixture: ComponentFixture<WebsiteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
