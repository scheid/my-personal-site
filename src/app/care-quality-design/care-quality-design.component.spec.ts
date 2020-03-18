import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareQualityDesignComponent } from './care-quality-design.component';

describe('CareQualityDesignComponent', () => {
  let component: CareQualityDesignComponent;
  let fixture: ComponentFixture<CareQualityDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareQualityDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareQualityDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
