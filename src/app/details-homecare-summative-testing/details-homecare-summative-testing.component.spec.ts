import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHomecareSummativeTestingComponent } from './details-homecare-summative-testing.component';

describe('DetailsHomecareSummativeTestingComponent', () => {
  let component: DetailsHomecareSummativeTestingComponent;
  let fixture: ComponentFixture<DetailsHomecareSummativeTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHomecareSummativeTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHomecareSummativeTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
