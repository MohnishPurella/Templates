import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContent2Component } from './template-content2.component';

describe('TemplateContent2Component', () => {
  let component: TemplateContent2Component;
  let fixture: ComponentFixture<TemplateContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
