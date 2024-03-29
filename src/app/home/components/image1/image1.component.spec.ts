import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1Component } from './image1.component';

describe('Image1Component', () => {
  let component: Image1Component;
  let fixture: ComponentFixture<Image1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
