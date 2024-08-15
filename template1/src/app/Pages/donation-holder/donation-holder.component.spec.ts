import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationHolderComponent } from './donation-holder.component';

describe('DonationHolderComponent', () => {
  let component: DonationHolderComponent;
  let fixture: ComponentFixture<DonationHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
