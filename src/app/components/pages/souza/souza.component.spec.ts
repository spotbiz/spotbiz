import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouzaComponent } from './souza.component';

describe('SouzaComponent', () => {
  let component: SouzaComponent;
  let fixture: ComponentFixture<SouzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
