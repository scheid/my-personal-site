import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVoiceAssistantComponent } from './details-voice-assistant.component';

describe('DetailsVoiceAssistantComponent', () => {
  let component: DetailsVoiceAssistantComponent;
  let fixture: ComponentFixture<DetailsVoiceAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVoiceAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVoiceAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
