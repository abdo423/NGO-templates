import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionThreeComponent } from './about-section-three.component';

describe('AboutSectionThreeComponent', () => {
  let component: AboutSectionThreeComponent;
  let fixture: ComponentFixture<AboutSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
