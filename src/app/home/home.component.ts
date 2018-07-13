import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Tab[];
  constructor() {
    this.tabs = [
    {
      title: 'Test'
    }
    ]
   }

  ngOnInit() {
  }

}
