import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOwnerProfileComponent } from './card-owner-profile.component';

describe('CardOwnerProfileComponent', () => {
  let component: CardOwnerProfileComponent;
  let fixture: ComponentFixture<CardOwnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardOwnerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
