import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyactivitiesPage } from './myactivities';

@NgModule({
  declarations: [
    MyactivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyactivitiesPage),
  ],
})
export class MyactivitiesPageModule {}
