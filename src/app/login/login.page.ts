import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular'
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(private toastCtrl:ToastController,private navCtrl:NavController) { 
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.navCtrl.navigateForward(['/main']);
      }
      else{

      }

    })
  }

  ngOnInit() {
   
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email,
      this.password).then((data) => {
      console.log(data);
      this.navCtrl.navigateForward(['/main']);
    }).catch((error) => {
      this.toastCtrl.create({ 
        message: error.message,
        duration:3000,
      }).then((toast) => {
        toast.present();
      })
    });

  }

}
