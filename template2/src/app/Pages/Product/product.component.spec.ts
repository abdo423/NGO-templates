import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productComponent } from './product.component';

describe('productComponent', () => {
  let component: productComponent;
  let fixture: ComponentFixture<productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [productComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
