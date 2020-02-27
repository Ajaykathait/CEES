import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShowComponentComponent } from './image-show-component.component';

describe('ImageShowComponentComponent', () => {
  let component: ImageShowComponentComponent;
  let fixture: ComponentFixture<ImageShowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
