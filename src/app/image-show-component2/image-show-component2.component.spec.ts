import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShowComponent2Component } from './image-show-component2.component';

describe('ImageShowComponent2Component', () => {
  let component: ImageShowComponent2Component;
  let fixture: ComponentFixture<ImageShowComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShowComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShowComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
