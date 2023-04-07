import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementServicesComponent } from './event-management-services.component';

describe('EventManagementServicesComponent', () => {
  let component: EventManagementServicesComponent;
  let fixture: ComponentFixture<EventManagementServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagementServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagementServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
