import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App,NavParams, ModalController, AlertController, ToastController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the GalleriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let base_url = Constant.domainConfig.base_url;
@IonicPage()
@Component({
  selector: 'page-mygalleries',
  templateUrl: 'mygalleries.html',
})
export class MygalleriesPage {
@ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: "",
    obj:"",
    b_url:""
   
   

  };
  b_url = {};
  obj:any;
  lists: Array<any>;
  first: number;
  //base_url: any;
  user_id: any = null;
  phone: any = null;
  student_id: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
  user:any='';

 
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
    this.userPostData.user_id = this.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    //this.userPostData.b_url =Constant.domainConfig1.b_url;
    this.noRecords = false;
    this.getFeed();
    this.b_url = Constant.domainConfig1.b_url;
    
    this.lists = new Array();
  }
   getFeed() {
   //var obj ={};
   this.obj = this.navParams.get('item');
      let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
       	       this.http.get(base_url + 'api/pgallery?id=' + this.obj.student_id).subscribe(data => {
					console.log(data.json());
					//loader.dismiss();
					this.lists = data.json();
					loader.dismiss();
			
				}, error => {
                 console.log(error);
 			    loader.dismiss();
				})
        
        
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MygalleriesPage');
  }

}
