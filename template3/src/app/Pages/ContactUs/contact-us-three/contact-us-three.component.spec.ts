import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsThreeComponent } from './contact-us-three.component';

describe('ContactUsThreeComponent', () => {
  let component: ContactUsThreeComponent;
  let fixture: ComponentFixture<ContactUsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
