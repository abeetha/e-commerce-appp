import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image3Component } from './image3.component';

describe('Image3Component', () => {
  let component: Image3Component;
  let fixture: ComponentFixture<Image3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
