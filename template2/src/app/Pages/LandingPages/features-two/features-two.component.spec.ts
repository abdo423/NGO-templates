import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTwoComponent } from './features-two.component';

describe('FeaturesTwoComponent', () => {
  let component: FeaturesTwoComponent;
  let fixture: ComponentFixture<FeaturesTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
