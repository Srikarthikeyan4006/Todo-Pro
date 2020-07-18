import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/installations';
import 'firebase/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyBUv3YwmanbrMgW6PFcTwMelOKlaZfbaIo",
  authDomain: "todo-772bf.firebaseapp.com",
  databaseURL: "https://todo-772bf.firebaseio.com",
  projectId: "todo-772bf",
  storageBucket: "todo-772bf.appspot.com",
  messagingSenderId: "364205704264",
  appId: "1:364205704264:web:f95e29874350f452ccc47d",
  measurementId: "G-YKYP45FH72",
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
