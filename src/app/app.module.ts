import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { DesignsComponent } from './designs/designs.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { DetailsHealthDialsComponent } from './details-health-dials/details-health-dials.component';
import { DetailsCognitiveLoadComponent } from './details-cognitive-load/details-cognitive-load.component';
import { DetailsWaterValveComponent } from './details-water-valve/details-water-valve.component';
import { DetailsStarterKitComponent } from './details-starter-kit/details-starter-kit.component';
import { DetailsPatientGeneratorComponent } from './details-patient-generator/details-patient-generator.component';
import { DetailsOpioidAnalysesComponent } from './details-opioid-analyses/details-opioid-analyses.component';

import { PatentStatusPipe } from './pipes/patent-status.pipe';

import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { PatentsComponent } from './patents/patents.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { FlyOutPanelModule } from './fly-out-panel/fly-out-panel.module';

import { ResearchComponent } from './research/research.component';

import { LogActionService } from './services/log-action.service';
import { DetailsDataSynthesizerComponent } from './details-data-synthesizer/details-data-synthesizer.component';
import { DetailsClinicalRiskItemsComponent } from './details-clinical-risk-items/details-clinical-risk-items.component';
import { CareQualityDesignComponent } from './care-quality-design/care-quality-design.component';
import { FilterActiveDesignsPipe } from './pipes/filter-active-designs.pipe';
import { DetailsVoiceAssistantComponent } from './details-voice-assistant/details-voice-assistant.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      DesignsComponent,
      ExperienceComponent,
      PhilosophyComponent,
      DetailsHealthDialsComponent,
      DetailsCognitiveLoadComponent,
      DetailsWaterValveComponent,
      DetailsStarterKitComponent,
      DetailsPatientGeneratorComponent,
      DetailsOpioidAnalysesComponent,
      PatentStatusPipe,
      EmploymentComponent,
      EducationComponent,
      PatentsComponent,
      PresentationsComponent,
    ResearchComponent,
    DetailsDataSynthesizerComponent,
    DetailsClinicalRiskItemsComponent,
    CareQualityDesignComponent,
    FilterActiveDesignsPipe,
    DetailsVoiceAssistantComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      FlyOutPanelModule

  ],
  providers: [LogActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
