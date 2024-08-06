import { Component, OnInit, ViewChild } from '@angular/core';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'lab5-angular-app';

  @ViewChild(NgstyleComponent)
  NgStleComponent!: NgstyleComponent;
  
  parentColorProperty!: string;

  constructor() {
  }
  ngOnInit(): void {
  }
  
  receiveData($event: string) {
    this.parentColorProperty = $event;
    console.log(this.parentColorProperty)
  }
}
