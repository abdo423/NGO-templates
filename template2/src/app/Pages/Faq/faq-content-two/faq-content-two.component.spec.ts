import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqContentTwoComponent } from './faq-content-two.component';

describe('FaqContentTwoComponent', () => {
  let component: FaqContentTwoComponent;
  let fixture: ComponentFixture<FaqContentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqContentTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqContentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
