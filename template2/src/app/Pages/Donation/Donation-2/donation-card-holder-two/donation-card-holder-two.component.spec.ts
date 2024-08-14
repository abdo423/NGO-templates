import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCardHolderTwoComponent } from './donation-card-holder-two.component';

describe('DonationCardHolderTwoComponent', () => {
  let component: DonationCardHolderTwoComponent;
  let fixture: ComponentFixture<DonationCardHolderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCardHolderTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCardHolderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
