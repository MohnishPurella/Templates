import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTemplatesComponent } from './home-page-templates.component';

describe('HomePageTemplatesComponent', () => {
  let component: HomePageTemplatesComponent;
  let fixture: ComponentFixture<HomePageTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageTemplatesComponent]
    });
    fixture = TestBed.createComponent(HomePageTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
