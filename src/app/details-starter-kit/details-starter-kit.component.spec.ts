import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStarterKitComponent } from './details-starter-kit.component';

describe('DetailsStarterKitComponent', () => {
  let component: DetailsStarterKitComponent;
  let fixture: ComponentFixture<DetailsStarterKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStarterKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStarterKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
