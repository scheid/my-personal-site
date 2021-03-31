import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { ModuleWithProviders } from '@angular/core';
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

import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { PatentsComponent } from './patents/patents.component';
import { PresentationsComponent } from './presentations/presentations.component';
import {DetailsDataSynthesizerComponent} from './details-data-synthesizer/details-data-synthesizer.component';
import {DetailsClinicalRiskItemsComponent} from './details-clinical-risk-items/details-clinical-risk-items.component';

import {CareQualityDesignComponent} from './care-quality-design/care-quality-design.component';
import {DetailsVoiceAssistantComponent} from './details-voice-assistant/details-voice-assistant.component';
import {DetailsIconPreferenceComponent} from './details-icon-preference/details-icon-preference.component';
import {DetailsHomecareSummativeTestingComponent} from './details-homecare-summative-testing/details-homecare-summative-testing.component';

// NOTE: you can use named router outlets in your html file, and refer to them here using the 'outlet' field with the name as the value.
//     http://blog.angular-university.io/angular2-router/

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: DesignsComponent},

    {path: 'health-dials', component: DetailsHealthDialsComponent},
    {path: 'cognitive-load', component: DetailsCognitiveLoadComponent },
    {path: 'water-valve-chart', component: DetailsWaterValveComponent},
    {path: 'experience', component: ExperienceComponent,
        children: [
            {path: 'employment', component: EmploymentComponent},
            {path: 'education', component: EducationComponent},
            {path: 'patents', component: PatentsComponent},
            {path: 'presentations', component: PresentationsComponent}
        ]},
    {path: 'philosophy', component: PhilosophyComponent},
    {path: 'starter-kit', component: DetailsStarterKitComponent},
    {path: 'patient-generator', component: DetailsPatientGeneratorComponent},
    {path: 'opioid-analyses', component: DetailsOpioidAnalysesComponent },
    {path: 'data-synthesizer', component: DetailsDataSynthesizerComponent},
    {path: 'clinical-risk-items', component: DetailsClinicalRiskItemsComponent},
    {path: 'care-quality-design', component: CareQualityDesignComponent},
    {path: 'voice-assistant', component: DetailsVoiceAssistantComponent},
    {path: 'icon-preference', component: DetailsIconPreferenceComponent},
    {path: 'homecare-summative-testing', component: DetailsHomecareSummativeTestingComponent},

    {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
