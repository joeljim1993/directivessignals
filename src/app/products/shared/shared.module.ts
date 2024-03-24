import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/customLabel.directive';

// las directivas se declaran en declarations

@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomLabelDirective
  ]
})
export class SharedModule { }
