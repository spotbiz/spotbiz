import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisPizzariaComponent } from './redes-sociais-pizzaria.component';

describe('RedesSociaisPizzariaComponent', () => {
  let component: RedesSociaisPizzariaComponent;
  let fixture: ComponentFixture<RedesSociaisPizzariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSociaisPizzariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSociaisPizzariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
