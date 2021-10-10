import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router";
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  list = [];

  constructor(private router: Router, private navCtrl: NavController) {

    this.list = [
      {
        'nombre': "Mami",
        'telefono': 57145106
      },
      {
        'nombre': "Ito",
        'telefono': 36613388
      }
    ]
  
  }

}
