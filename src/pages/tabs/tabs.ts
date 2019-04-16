import { Component } from '@angular/core';
import { NavController, ModalController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
//import { FavoritesPage } from '../favorites/favorites';
//import { CategoriesPage } from '../categories/categories';
//import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { Login } from '../login/login';
import { ActivitiesPage } from '../activities/activities';
import { ContactsPage } from '../contacts/contacts';
import { DiaryPage } from '../diary/diary';
//import { ReportsPage } from '../reports/reports';
import { GalleriesPage } from '../galleries/galleries';
import { StudentsPage } from '../students/students';
import { Events } from 'ionic-angular';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  user_id: any = null;
  phone: any = null;
  latestEntries:any = null;

  tab1Root = HomePage;
  //tab2Root = SearchPage;
  //tab3Root = CategoriesPage;
  tab10Root = StudentsPage;
  tab4Root = ActivitiesPage;
  tab5Root = ProfilePage;
  tab6Root = Login;
  tab7Root = GalleriesPage;
  tab8Root = DiaryPage;
  tab9Root = ContactsPage;
  //tab10Root = ReportsPage;

  constructor(public storage: Storage, 
   public events:Events,
   public navCtrl: NavController,
  public modalCtrl: ModalController,
  public loadingController:LoadingController) {

  }
//ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');

  //}




 



}
