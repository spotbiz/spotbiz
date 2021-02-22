import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosaComponent } from './tattoosa.component';

describe('TattoosaComponent', () => {
  let component: TattoosaComponent;
  let fixture: ComponentFixture<TattoosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattoosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattoosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
