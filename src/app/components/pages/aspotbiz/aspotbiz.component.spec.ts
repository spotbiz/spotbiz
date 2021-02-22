import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspotbizComponent } from './aspotbiz.component';

describe('AspotbizComponent', () => {
  let component: AspotbizComponent;
  let fixture: ComponentFixture<AspotbizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspotbizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspotbizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
