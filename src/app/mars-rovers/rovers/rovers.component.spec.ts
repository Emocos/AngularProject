import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversComponent } from './rovers.component';

describe('RoversComponent', () => {
  let component: RoversComponent;
  let fixture: ComponentFixture<RoversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoversComponent]
    });
    fixture = TestBed.createComponent(RoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
