import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTwoComponent } from './gallery-two.component';

describe('GalleryTwoComponent', () => {
  let component: GalleryTwoComponent;
  let fixture: ComponentFixture<GalleryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
