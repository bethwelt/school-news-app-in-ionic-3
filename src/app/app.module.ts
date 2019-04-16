import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule} from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactsPage } from '../pages/contacts/contacts';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { ActivitiesPage } from '../pages/activities/activities';
import { GalleriesPage } from '../pages/galleries/galleries';
import { DiaryPage } from '../pages/diary/diary';
import { StudentsPage } from '../pages/students/students';
import { MyactivitiesPage } from '../pages/myactivities/myactivities';
import { MygalleriesPage } from '../pages/mygalleries/mygalleries';
import { ActivationCodePage } from '../pages/activation-code/activation-code';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { CallNumber } from '@ionic-native/call-number';
import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { ViewEventPage } from '../pages/view-event/view-event';
import { ViewExamPage } from '../pages/view-exam/view-exam';
import { ReportsPage } from '../pages/reports/reports';
import { ExamsPage } from '../pages/exams/exams';
import { FeePage } from '../pages/fee/fee';
import { ListPage } from '../pages/list/list';
/*translate loader*/
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*end translate loader*/

//export function createTranslateLoader(http: Http) {
    //return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//}

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactsPage,
    HomePage,
    TabsPage,
    PostDetailPage,
    ActivationCodePage,
    TabsPage,
    ActivitiesPage,
    GalleriesPage ,
    ProfilePage,
    DiaryPage,
    StudentsPage,
    MyactivitiesPage ,
    MygalleriesPage,
    SearchPipe,
    SortPipe,
    ViewEventPage,
    ReportsPage,
    ExamsPage,
    FeePage,
    ListPage,
    ViewExamPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactsPage,
    HomePage,
    TabsPage,
    PostDetailPage,
    ActivationCodePage,
    ProfilePage,
    TabsPage,
    ActivitiesPage,
    GalleriesPage ,
    DiaryPage,
    StudentsPage,
    MyactivitiesPage ,
    MygalleriesPage,
    ViewEventPage,
    ReportsPage,
    ExamsPage,
    FeePage,
    ListPage,
    ViewExamPage
  

  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,SplitPane,Common,CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
