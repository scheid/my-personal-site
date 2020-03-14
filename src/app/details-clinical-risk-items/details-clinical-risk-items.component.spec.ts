import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClinicalRiskItemsComponent } from './details-clinical-risk-items.component';

describe('DetailsClinicalRiskItemsComponent', () => {
  let component: DetailsClinicalRiskItemsComponent;
  let fixture: ComponentFixture<DetailsClinicalRiskItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsClinicalRiskItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClinicalRiskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
