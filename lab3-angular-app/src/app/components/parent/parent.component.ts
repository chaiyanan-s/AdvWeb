import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  parentData!: number;
  childData!: number;
  status!: string;
  textMessage!: string;
  public showChild = true;
  
  constructor() { console.log("constructor works!"); }

  ngOnChanges(): void {
    console.log("ngOnChanges works!");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck works!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit works!");
  }
  ngAfterContentChecked(): void {
    if(this.textMessage == "B6414313") {
      this.status = "Your ID id OK";
    } else {
      this.status = "Errror";
    }
    console.log("ngAfterContentChecked works!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit works!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked works!");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy works!");
  }

  ngOnInit(): void {
      this.parentData = 0;
      this.childData = 0;
      console.log("ngOnInit work!");
  }

  OnClick2Child() {
    this.parentData += 1;
    // console.log(this.parentData)
  }

  receiveData($event: number) {
    this.childData = $event;
  }

  OnClick2ViewChild() {
    this.childComponent.OnClick2Parent();
  }

  update() {
    this.showChild = !this.showChild;
  }
}
