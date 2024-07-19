import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimation2Component } from './text-animation2.component';

describe('TextAnimation2Component', () => {
  let component: TextAnimation2Component;
  let fixture: ComponentFixture<TextAnimation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAnimation2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAnimation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
