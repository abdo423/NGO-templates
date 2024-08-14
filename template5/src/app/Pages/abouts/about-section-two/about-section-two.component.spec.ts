import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionTwoComponent } from './about-section-two.component';

describe('AboutSectionTwoComponent', () => {
  let component: AboutSectionTwoComponent;
  let fixture: ComponentFixture<AboutSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
