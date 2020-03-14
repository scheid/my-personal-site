import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWaterValveComponent } from './details-water-valve.component';

describe('DetailsWaterValveComponent', () => {
  let component: DetailsWaterValveComponent;
  let fixture: ComponentFixture<DetailsWaterValveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWaterValveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWaterValveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
