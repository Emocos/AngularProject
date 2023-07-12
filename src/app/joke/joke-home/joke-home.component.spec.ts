import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeHomeComponent } from './joke-home.component';

describe('JokeHomeComponent', () => {
  let component: JokeHomeComponent;
  let fixture: ComponentFixture<JokeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokeHomeComponent]
    });
    fixture = TestBed.createComponent(JokeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
