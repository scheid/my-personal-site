
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyOutPanelComponent } from './fly-out-panel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [RouterModule, CommonModule,  FormsModule, NgbModule],
    declarations: [FlyOutPanelComponent],
    exports: [FlyOutPanelComponent]
})
export class FlyOutPanelModule {


}
