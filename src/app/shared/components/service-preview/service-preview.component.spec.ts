import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePreviewComponent } from './service-preview.component';

describe('ServicePreviewComponent', () => {
  let component: ServicePreviewComponent;
  let fixture: ComponentFixture<ServicePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ServicePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
