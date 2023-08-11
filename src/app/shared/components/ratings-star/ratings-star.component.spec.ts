import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsStarComponent } from './ratings-star.component';

describe('RatingsStarComponent', () => {
  let component: RatingsStarComponent;
  let fixture: ComponentFixture<RatingsStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RatingsStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
