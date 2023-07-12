import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversHomeComponent } from './rovers-home.component';

describe('RoversHomeComponent', () => {
  let component: RoversHomeComponent;
  let fixture: ComponentFixture<RoversHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoversHomeComponent]
    });
    fixture = TestBed.createComponent(RoversHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
