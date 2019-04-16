import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentsPage } from './students';

@NgModule({
  declarations: [
    StudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentsPage),
  ],
})
export class StudentsPageModule {}
