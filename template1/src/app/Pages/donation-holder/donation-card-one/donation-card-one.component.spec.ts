import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCardOneComponent } from './donation-card-one.component';

describe('DonationCardOneComponent', () => {
  let component: DonationCardOneComponent;
  let fixture: ComponentFixture<DonationCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCardOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
