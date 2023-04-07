import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingServicesComponent } from './digital-marketing-services.component';

describe('DigitalMarketingServicesComponent', () => {
  let component: DigitalMarketingServicesComponent;
  let fixture: ComponentFixture<DigitalMarketingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
