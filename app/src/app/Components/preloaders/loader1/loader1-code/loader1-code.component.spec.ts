import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader1CodeComponent } from './loader1-code.component';

describe('Loader1CodeComponent', () => {
  let component: Loader1CodeComponent;
  let fixture: ComponentFixture<Loader1CodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loader1CodeComponent]
    });
    fixture = TestBed.createComponent(Loader1CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
