import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionOneComponent } from './about-section-one.component';

describe('AboutSectionOneComponent', () => {
  let component: AboutSectionOneComponent;
  let fixture: ComponentFixture<AboutSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
