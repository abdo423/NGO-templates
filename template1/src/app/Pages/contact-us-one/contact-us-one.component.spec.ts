import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsOneComponent } from './contact-us-one.component';

describe('ContactUsOneComponent', () => {
  let component: ContactUsOneComponent;
  let fixture: ComponentFixture<ContactUsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
