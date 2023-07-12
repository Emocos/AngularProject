import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversPhotoComponent } from './rovers-photo.component';

describe('RoversPhotoComponent', () => {
  let component: RoversPhotoComponent;
  let fixture: ComponentFixture<RoversPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoversPhotoComponent]
    });
    fixture = TestBed.createComponent(RoversPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
