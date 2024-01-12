import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyFormComponent } from './guy-form.component';

describe('GuyFormComponent', () => {
  let component: GuyFormComponent;
  let fixture: ComponentFixture<GuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
