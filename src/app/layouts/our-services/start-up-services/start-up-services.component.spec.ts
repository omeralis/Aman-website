import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpServicesComponent } from './start-up-services.component';

describe('StartUpServicesComponent', () => {
  let component: StartUpServicesComponent;
  let fixture: ComponentFixture<StartUpServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartUpServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartUpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
