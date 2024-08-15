import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentComponent } from './achivment.component';

describe('AchivmentTwoComponent', () => {
  let component: AchivmentComponent;
  let fixture: ComponentFixture<AchivmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
