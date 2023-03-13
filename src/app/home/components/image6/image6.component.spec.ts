import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image6Component } from './image6.component';

describe('Image6Component', () => {
  let component: Image6Component;
  let fixture: ComponentFixture<Image6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
