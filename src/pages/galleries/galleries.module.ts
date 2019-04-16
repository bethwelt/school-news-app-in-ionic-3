import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleriesPage } from './galleries';

@NgModule({
  declarations: [
    GalleriesPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleriesPage),
  ],
})
export class GalleriesPageModule {}
