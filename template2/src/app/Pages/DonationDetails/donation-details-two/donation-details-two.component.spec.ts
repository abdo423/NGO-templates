import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsTwoComponent } from './donation-details-two.component';

describe('DonationDetailsTwoComponent', () => {
  let component: DonationDetailsTwoComponent;
  let fixture: ComponentFixture<DonationDetailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationDetailsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
