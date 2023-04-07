import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaServicesComponent } from './media-services.component';

describe('MediaServicesComponent', () => {
  let component: MediaServicesComponent;
  let fixture: ComponentFixture<MediaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
