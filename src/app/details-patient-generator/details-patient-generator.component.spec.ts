import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPatientGeneratorComponent } from './details-patient-generator.component';

describe('DetailsPatientGeneratorComponent', () => {
  let component: DetailsPatientGeneratorComponent;
  let fixture: ComponentFixture<DetailsPatientGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPatientGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPatientGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
