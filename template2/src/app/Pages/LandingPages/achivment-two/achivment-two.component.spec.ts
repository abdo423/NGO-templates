import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentTwoComponent } from './achivment-two.component';

describe('AchivmentTwoComponent', () => {
  let component: AchivmentTwoComponent;
  let fixture: ComponentFixture<AchivmentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivmentTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
