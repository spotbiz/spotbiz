import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesLojasComponent } from './sites-lojas.component';

describe('SitesLojasComponent', () => {
  let component: SitesLojasComponent;
  let fixture: ComponentFixture<SitesLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesLojasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
