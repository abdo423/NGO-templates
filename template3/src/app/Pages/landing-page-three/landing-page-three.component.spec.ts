import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageThreeComponent } from './landing-page-three.component';

describe('LandingPageThreeComponent', () => {
  let component: LandingPageThreeComponent;
  let fixture: ComponentFixture<LandingPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
