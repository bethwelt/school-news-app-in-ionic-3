import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App, AlertController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { DiaryPage } from '../diary/diary';
import { MyactivitiesPage } from '../myactivities/myactivities';
import { MygalleriesPage } from '../mygalleries/mygalleries';
import { PostDetailPage} from '../post-detail/post-detail';
let base_url = Constant.domainConfig.base_url;

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

 
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
   public check_edit: boolean;
  public lists: Array<any>;
  public first: number;
  user_id: any = null;
  public phone: any = null;
  public email: any = null;
  public first_name: any = null;
  public last_name: any = null;
  student_img_url={};
  slider_lists: Array<any>;
  user:any='';
  userPostData = {
    user_id: "",
    token: "",
    phone: "",
    email: "",
    last_name: "",
    first_name: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };
  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public loadingCtrl:LoadingController,
    public http: Http,
    public authService: AuthService
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.phone = this.userDetails.phone;
    this.userPostData.email = this.userDetails.email;
    this.userPostData.first_name = this.userDetails.first_name;
    this.userPostData.last_name = this.userDetails.last_name;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.lists = new Array();
    this.student_img_url = Constant.domainConfig2.student_img_url;
  }
  getFeed() {
    //this.common.presentLoading();
 let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
             //+this.userPostData.phone
       	       this.http.get(base_url + 'api/stlist?id='+this.userPostData.phone).subscribe(data => {
					console.log(data.json());
					loader.dismiss();
					this.lists = data.json();
					//loader.dismiss();
			
				}, error => {
                 console.log(error);
 			    loader.dismiss();
				})
        
        
  }
  edit_prf(){
     this.check_edit = true;
   }

   un_edit_prf(){
     this.check_edit = false;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
