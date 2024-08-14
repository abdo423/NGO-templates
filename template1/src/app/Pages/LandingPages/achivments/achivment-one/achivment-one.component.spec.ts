import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentOneComponent } from './achivment-one.component';

describe('AchivmentOneComponent', () => {
  let component: AchivmentOneComponent;
  let fixture: ComponentFixture<AchivmentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivmentOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivmentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
