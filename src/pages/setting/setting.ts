import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  county_list: any;
  cities_list: any;

  county: any=null;
  cities: any=null;
  all_local: any=false;
  temp_county: any;
  constructor(public events: Events, public navCtrl: NavController, public http: Http, public storage: Storage, public viewCtrl: ViewController) {
    this.http.get(Constant.domainConfig.base_url+"api/county_api/county").subscribe(data=>{
      console.log(data.json());
      this.county_list=data.json();
    },error=>{

    })
  }

  ionViewWillEnter(){
    this.storage.ready().then(() => {
      this.storage.get('local').then((data)=>{
        console.log(data);
        if(data != null){
          this.county = data.county;
          this.temp_county = data.county;
          this.cities = data.cities;
          this.all_local = data.all_local;

          this.http.get(Constant.domainConfig.base_url+"api/cities_api/cities_by_county_id?id="+this.county).subscribe(data=>{
            console.log(data.json());
            if(data.json().empty == null){
              this.cities_list=data.json();
            }
          })
        }
      });
    });
  }

  select_local(){
    if(this.county != this.temp_county){
      this.http.get(Constant.domainConfig.base_url+"api/cities_api/cities_by_county_id?id="+this.county).subscribe(data=>{
        console.log(data.json());
        this.cities_list=data.json();
        this.temp_county = this.county;
        this.cities = null;
      })
    }

    this.storage.ready().then(() => {
      this.storage.set('local', {'county': this.county,'cities': this.cities,'all_local': this.all_local});
      this.events.publish('local: change');
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
