import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCcmComponent } from './details-ccm.component';

describe('DetailsCcmComponent', () => {
  let component: DetailsCcmComponent;
  let fixture: ComponentFixture<DetailsCcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
