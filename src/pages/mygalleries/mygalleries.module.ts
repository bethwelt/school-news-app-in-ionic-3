import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygalleriesPage } from './mygalleries';

@NgModule({
  declarations: [
    MygalleriesPage,
  ],
  imports: [
    IonicPageModule.forChild(MygalleriesPage),
  ],
})
export class MygalleriesPageModule {}
