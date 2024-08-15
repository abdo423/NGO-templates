import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesThreeComponent } from './features-three.component';

describe('FeaturesThreeComponent', () => {
  let component: FeaturesThreeComponent;
  let fixture: ComponentFixture<FeaturesThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
