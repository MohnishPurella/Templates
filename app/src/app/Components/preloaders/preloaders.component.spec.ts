import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadersComponent } from './preloaders.component';

describe('PreloadersComponent', () => {
  let component: PreloadersComponent;
  let fixture: ComponentFixture<PreloadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadersComponent]
    });
    fixture = TestBed.createComponent(PreloadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
