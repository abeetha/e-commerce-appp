import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image4Component } from './image4.component';

describe('Image4Component', () => {
  let component: Image4Component;
  let fixture: ComponentFixture<Image4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
