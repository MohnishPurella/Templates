import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimation1Component } from './text-animation1.component';

describe('TextAnimation1Component', () => {
  let component: TextAnimation1Component;
  let fixture: ComponentFixture<TextAnimation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAnimation1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAnimation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
