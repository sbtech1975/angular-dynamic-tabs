import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Tab[];
  constructor() {
    this.tabs = [];
   }

  ngOnInit() {
  }

  addTab(): void {
    const datePipe = new DatePipe('en-US');
    const title = 'Created at ' + datePipe.transform(new Date(), 'medium');
    this.tabs.push({title: title});
  }
}
