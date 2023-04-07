import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGalleryComponent } from './our-gallery.component';

describe('OurGalleryComponent', () => {
  let component: OurGalleryComponent;
  let fixture: ComponentFixture<OurGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
