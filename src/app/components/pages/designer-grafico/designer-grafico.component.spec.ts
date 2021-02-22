import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerGraficoComponent } from './designer-grafico.component';

describe('DesignerGraficoComponent', () => {
  let component: DesignerGraficoComponent;
  let fixture: ComponentFixture<DesignerGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
