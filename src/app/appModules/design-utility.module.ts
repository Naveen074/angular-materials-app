import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';



@NgModule({
  declarations: [
    PromptComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    MaterialModule,
    PromptComponent
  ]
})
export class DesignUtilityModule { }
