import { Component, ViewChild } from "@angular/core";
import { IonicPage,NavController, App, ModalController, AlertController, ToastController, Slides,LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { Http } from '@angular/http';
import * as Constant from '../../config/constants';
import { CallNumber } from '@ionic-native/call-number';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the GalleriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let base_url = Constant.domainConfig.base_url;
let b_url = Constant.domainConfig1.b_url;

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };

  lists: Array<any>;
  first: number;
  //base_url: any;
  user_id: any = null;
  phone: any = null;
  county: any = null;
  cities: any = null;
  slider_lists: Array<any>;
  user:any='';
  email:any;

 
  constructor(
    public common: Common,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public app: App,
    public loadingCtrl:LoadingController,
    public http: Http,
    public authService: AuthService
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.noRecords = false;
    this.getFeed();
    this.lists = new Array();
  }
  getFeed() {
    //this.common.presentLoading();
            let loader = this.loadingCtrl.create({
                  content: "Loading"
                });
               loader.present();
             this.lists = new Array();
       	       this.http.get(base_url + 'api/contacts').subscribe(data => {
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
    console.log('ionViewDidLoad ContactsPage');
  }

  mail(item) {
    console.log(item);
  
    let promtDialog = this.alertCtrl.create({
      title: 'Messages',
      inputs: [
        {
          name: 'message',
          placeholder: 'Message'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            ///send message via email system
            //this.storage.ready().then(() => {
              //this.storage.get('user').then((obj) => {
                if(this.userDetails.email==item.email){
                  let alert=this.alertCtrl.create({
                    message:"you cannot send mail to yourself",
                    buttons:['Dismiss']
                  })
                  alert.present();
                  return;
                }
                let post_data = 'email=' + this.userDetails.email + '&message=' + data.message + '&user_name=' + this.userDetails.first_name + '&reply_to=' + this.userDetails.email;
              
              //})
            //})
          }
        }
      ]
    })
    promtDialog.present();
  }

  call(phone: string) {
		this.callNumber.callNumber(phone, true)
			.then(() => console.log('Launched dialer!'))
			.catch(() => console.log('Error launching dialer'));
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

 profile() {
    this.navCtrl.push(ProfilePage);
  }

}




