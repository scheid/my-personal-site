import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDataSynthesizerComponent } from './details-data-synthesizer.component';

describe('DetailsDataSynthesizerComponent', () => {
  let component: DetailsDataSynthesizerComponent;
  let fixture: ComponentFixture<DetailsDataSynthesizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDataSynthesizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDataSynthesizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
