import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCognitiveLoadComponent } from './details-cognitive-load.component';

describe('DetailsCognitiveLoadComponent', () => {
  let component: DetailsCognitiveLoadComponent;
  let fixture: ComponentFixture<DetailsCognitiveLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCognitiveLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCognitiveLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
