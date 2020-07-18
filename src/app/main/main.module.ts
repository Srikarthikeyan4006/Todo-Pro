import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundPadding: 30,
      radius: 100,
      titleFontSize: "36",
      subtitleFontSize: "16",
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      animation:false,
      responsive:true,
      renderOnClick: false
    })
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
