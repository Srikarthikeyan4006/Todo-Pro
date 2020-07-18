import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ToastController,NavController } from '@ionic/angular'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:string;

  password:string;
 
  constructor(private toastCtrl:ToastController,private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email,
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
