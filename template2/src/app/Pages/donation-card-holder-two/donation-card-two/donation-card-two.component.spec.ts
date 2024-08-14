import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCardTwoComponent } from './donation-card-two.component';

describe('DonationCardTwoComponent', () => {
  let component: DonationCardTwoComponent;
  let fixture: ComponentFixture<DonationCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCardTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
