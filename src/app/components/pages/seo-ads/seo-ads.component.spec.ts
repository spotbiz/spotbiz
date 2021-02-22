import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAdsComponent } from './seo-ads.component';

describe('SeoAdsComponent', () => {
  let component: SeoAdsComponent;
  let fixture: ComponentFixture<SeoAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
