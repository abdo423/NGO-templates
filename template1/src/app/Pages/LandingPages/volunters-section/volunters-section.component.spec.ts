import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntersSectionComponent } from './volunters-section.component';

describe('VoluntersSectionComponent', () => {
  let component: VoluntersSectionComponent;
  let fixture: ComponentFixture<VoluntersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
