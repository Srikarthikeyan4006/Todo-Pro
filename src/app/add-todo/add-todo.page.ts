import { Component, OnInit } from '@angular/core';
import { ToastController,NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  title:string;
  description:string;
  lastdate:Date;
  owner:string;
  total:any;

  constructor(private toastCtrl:ToastController,private navCtrl:NavController) {
   }

  async ngOnInit() {
     this.owner= await firebase.auth().currentUser.uid;
  }
  store(){
    firebase.firestore().collection("todos").add({
      todo_title:this.title,
      todo_description:this.description,
      todo_date:this.lastdate,
      todo_owner:this.owner,
      status:"incomplete"
    }).then((docRef) => {
      this.toastCtrl.create({
        message: "Task added!",
        duration: 2000
      }).then((toast) =>{
        toast.present();
        this.navCtrl.back();
        
        
      })

     }).catch((error) => {
       this.toastCtrl.create({
         message:error.message,
         duration:2000
       }).then((toast) =>{
         toast.present();
       })
     })
  }

}
