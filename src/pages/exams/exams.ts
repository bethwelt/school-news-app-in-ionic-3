import { Component,ViewChild } from "@angular/core";
//import { NavController, App, AlertController } from "ionic-angular";
import { NavController, App, AlertController, LoadingController,NavParams } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { ViewExamPage } from '../view-exam/view-exam';
let base_url = Constant.domainConfig.base_url;

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {
 @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  //public obj: any;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: "",
  };

  lists: Array<any>;
  first: number;
  base_url: any;
  user_id: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
  user:any='';
  obj:any='';

  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public loadingCtrl:LoadingController,
    public http: Http,
    public authService: AuthService,
    public navParams: NavParams,
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.lists = new Array();
  }

  getFeed() {
   //var obj = {};
   this.obj = this.navParams.get('item');
   let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
             this.http.get(base_url + 'api/exams?id='+this.obj.student_id).subscribe(data => {
                console.log(data.json());
                this.lists = data.json();
                loader.dismiss();
        
        }, error => {
          console.log(error);
          loader.dismiss();

        })
        
        
  }

  view(item) {
    this.navCtrl.push(ViewExamPage, { item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
  }

  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  

}




