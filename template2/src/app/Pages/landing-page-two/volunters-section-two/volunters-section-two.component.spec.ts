import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntersSectionTwoComponent } from './volunters-section-two.component';

describe('VoluntersSectionTwoComponent', () => {
  let component: VoluntersSectionTwoComponent;
  let fixture: ComponentFixture<VoluntersSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntersSectionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntersSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
