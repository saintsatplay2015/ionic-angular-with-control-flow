import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, 
         IonToolbar, 
         IonTitle, 
         IonContent, 
         IonGrid, 
         IonRow, 
         IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, NgClass],
})
export class HomePage {


  public comics = [{
    title: 'Action',
    year: '1976 - 1977',
    genre: 'action, adventure, thriller'
  },
  {
    title: 'Battle',
    year: '1975 - 1988',
    genre: 'action, adventure, war'
  },
  {
    title: 'Commando',
    year: '1961',
    genre: 'action, adventure, war'
  },
  {
    title: 'Eagle',
    year: '1950 - 1969 / 1982 - 1994',
    genre: 'Science fiction, action, adventure, thriller'
  },
  {
    title: 'Lion',
    year: '1952 - 1974',
    genre: 'Science fiction, action, adventure, thriller'
  },
  {
    title: 'Starlord',
    year: '1978',
    genre: 'Science fiction, thriller'
  },
  {
    title: 'Victor',
    year: '1961 - 1992',
    genre: 'War, Adventure, Sport'
  },
  {
    title: 'Warlord',
    year: '1974 - 1986',
    genre: 'War, adventure'
  }];


  constructor() {}
}
