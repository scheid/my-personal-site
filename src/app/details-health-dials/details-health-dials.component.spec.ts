import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHealthDialsComponent } from './details-health-dials.component';

describe('DetailsHealthDialsComponent', () => {
  let component: DetailsHealthDialsComponent;
  let fixture: ComponentFixture<DetailsHealthDialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHealthDialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHealthDialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
