import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIconPreferenceComponent } from './details-icon-preference.component';

describe('DetailsIconPreferenceComponent', () => {
  let component: DetailsIconPreferenceComponent;
  let fixture: ComponentFixture<DetailsIconPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsIconPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIconPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
