import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIdentidadeComponent } from './logo-identidade.component';

describe('LogoIdentidadeComponent', () => {
  let component: LogoIdentidadeComponent;
  let fixture: ComponentFixture<LogoIdentidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoIdentidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoIdentidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
