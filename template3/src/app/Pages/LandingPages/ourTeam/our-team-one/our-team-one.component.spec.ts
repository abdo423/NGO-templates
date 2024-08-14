import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamOneComponent } from './our-team-one.component';

describe('OurTeamOneComponent', () => {
  let component: OurTeamOneComponent;
  let fixture: ComponentFixture<OurTeamOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTeamOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTeamOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
