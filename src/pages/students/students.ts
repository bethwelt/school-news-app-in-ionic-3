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
import { ProfilePage } from '../profile/profile';
let base_url = Constant.domainConfig.base_url;


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  public lists: Array<any>;
  public first: number;
  user_id: any = null;
  public phone: any = null;
  student_img_url={};
  slider_lists: Array<any>;
  user:any='';
  userPostData = {
    user_id: "",
    token: "",
    phone: "",
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




	diary(item) {
		this.navCtrl.push(DiaryPage, { item: item});
	}
	activities(item) {
		this.navCtrl.push(MyactivitiesPage, { item: item });
	}
	gallery(item) {
		this.navCtrl.push(MygalleriesPage, { item: item });
	}

	view(item) {
		this.navCtrl.push(PostDetailPage, { item: item });
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }
   profile() {
    this.navCtrl.push(ProfilePage);
  }

}

