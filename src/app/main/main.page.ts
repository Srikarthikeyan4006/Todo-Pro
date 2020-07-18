import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import {ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    todos:any[]=[];
    userID:any;
    percent:number;
    total:any;
    completed:any;
    incomplete:any;
 constructor(private navCtrl:NavController,private toastCtrl:ToastController,private actCtrl:ActivatedRoute)  { 
    this.userID= firebase.auth().currentUser.uid;
    this.gettodo();
 }

  

    ngOnInit() {
     

    
  }
  gettodo(){
    firebase.firestore().collection("todos")
    .where("todo_owner","==",this.userID)
    .where("status","==","incomplete")
    .onSnapshot((querrySnap) =>{
       this.todos = querrySnap.docs;
    });
    firebase.firestore().collection("todos")
    .where("todo_owner","==",this.userID)
    .onSnapshot( (querrySnap) =>{
       this.total = querrySnap.size; 
      });
    firebase.firestore().collection("todos")
    .where("todo_owner","==",this.userID)
    .where("status","==","completed")
    .onSnapshot((querrySnap) =>{
    this.completed=querrySnap.size;
    this.percent=Math.floor((querrySnap.size/this.total)*100) 

 });

  }
  gotoAdd(){
    this.navCtrl.navigateForward(['\add-todo']);
  }
  getform(timestamp:firebase.firestore.Timestamp){
    let date_form = timestamp.toDate();
    return date_form.toDateString();
  }
  markread(document:firebase.firestore.QueryDocumentSnapshot){
 firebase.firestore().collection("todos").doc(document.id).set({
   "status":"completed"
 },{
   merge:true
 }).then(() =>{
    this.toastCtrl.create({
      message:"Marked as Completed!",
      duration:2000
    }).then((toast) =>{
      toast.present();
    })
 })

  }
 logout(){
   firebase.auth().signOut().then(() =>{
     this.navCtrl.navigateRoot("/login")
   })
 }
 formatSubtitle = (percent: number) => {
  return `${this.completed}/${this.total}`;
}


}
