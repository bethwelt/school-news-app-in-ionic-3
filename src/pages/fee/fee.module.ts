import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeePage } from './fee';

@NgModule({
  declarations: [
    FeePage,
  ],
  imports: [
    IonicPageModule.forChild(FeePage),
  ],
})
export class FeePageModule {}
