import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryThreeComponent } from './gallery-three.component';

describe('GalleryThreeComponent', () => {
  let component: GalleryThreeComponent;
  let fixture: ComponentFixture<GalleryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
