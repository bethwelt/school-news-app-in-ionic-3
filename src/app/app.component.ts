import { Component , ViewChild } from '@angular/core';
import { Platform, App, MenuController ,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplitPane } from '../providers/split-pane';
import { Welcome } from '../pages/welcome/welcome';
import { StudentsPage } from '../pages/students/students';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { ActivitiesPage } from '../pages/activities/activities';
import { ContactsPage } from '../pages/contacts/contacts';
import { ReportsPage } from '../pages/reports/reports';
import { ExamsPage } from '../pages/exams/exams';
import { FeePage } from '../pages/fee/fee';
import { ListPage } from '../pages/list/list';
import { ViewExamPage } from '../pages/view-exam/view-exam';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild('myNav') nav: NavController
  rootPage:any = Welcome;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, public splitPane: SplitPane, public menu: MenuController,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


   backToWelcome(){
   const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    //Api Token Logout 
    
    localStorage.clear();
    this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 1000);
  }
  students(){
     this.app.getRootNav().push(StudentsPage);
  }
  reports(){
   this.app.getRootNav().push(ListPage);
  }
 
  home(){
   this.app.getRootNav().push(HomePage);
  }
   profile(){
   this.app.getRootNav().push(ProfilePage);
  }
  
}
