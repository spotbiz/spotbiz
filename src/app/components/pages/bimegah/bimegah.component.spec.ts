import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimegahComponent } from './bimegah.component';

describe('BimegahComponent', () => {
  let component: BimegahComponent;
  let fixture: ComponentFixture<BimegahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimegahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BimegahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
