import { ComponentFixture, TestBed } from '@angular/core/testing';

import { catalogComponent } from './catalog.component';

describe('catalogComponent', () => {
  let component: catalogComponent;
  let fixture: ComponentFixture<catalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [catalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(catalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
