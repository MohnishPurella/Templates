import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1CodeComponent } from './template1-code.component';

describe('Template1CodeComponent', () => {
  let component: Template1CodeComponent;
  let fixture: ComponentFixture<Template1CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Template1CodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Template1CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
