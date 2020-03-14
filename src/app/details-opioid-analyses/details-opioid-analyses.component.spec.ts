import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOpioidAnalysesComponent } from './details-opioid-analyses.component';

describe('DetailsOpioidAnalysesComponent', () => {
  let component: DetailsOpioidAnalysesComponent;
  let fixture: ComponentFixture<DetailsOpioidAnalysesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOpioidAnalysesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOpioidAnalysesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
