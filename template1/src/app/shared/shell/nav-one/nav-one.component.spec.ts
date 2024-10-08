import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOneComponent } from './nav-one.component';

describe('NavOneComponent', () => {
  let component: NavOneComponent;
  let fixture: ComponentFixture<NavOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
