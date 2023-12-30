import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader1Component } from './loader1.component';

describe('Loader1Component', () => {
  let component: Loader1Component;
  let fixture: ComponentFixture<Loader1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loader1Component]
    });
    fixture = TestBed.createComponent(Loader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
