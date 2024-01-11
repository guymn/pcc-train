import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrtComponent } from './vrt.component';

describe('VrtComponent', () => {
  let component: VrtComponent;
  let fixture: ComponentFixture<VrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
