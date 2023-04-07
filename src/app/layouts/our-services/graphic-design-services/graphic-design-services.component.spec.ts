import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignServicesComponent } from './graphic-design-services.component';

describe('GraphicDesignServicesComponent', () => {
  let component: GraphicDesignServicesComponent;
  let fixture: ComponentFixture<GraphicDesignServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
