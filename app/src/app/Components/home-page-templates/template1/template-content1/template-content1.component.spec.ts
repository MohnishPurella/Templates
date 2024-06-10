import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContent1Component } from './template-content1.component';

describe('TemplateContent1Component', () => {
  let component: TemplateContent1Component;
  let fixture: ComponentFixture<TemplateContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
