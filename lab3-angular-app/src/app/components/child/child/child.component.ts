import { Component, Input, OnInit, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() parentData!: number;
  @Output() messageEvent = new EventEmitter<number>();

  childData!: number;

  constructor() { console.log("constructor works!"); }

  ngOnChanges(): void {
    console.log("--ngOnChanges works!");
  }
  ngDoCheck(): void {
    console.log("--ngDoCheck works!");
  }
  ngAfterContentInit(): void {
    console.log("--ngAfterContentInit works!");
  }
  ngAfterContentChecked(): void {
    console.log("--ngAfterContentChecked works!");
  }
  ngAfterViewInit(): void {
    console.log("--ngAfterViewInit works!");
  }
  ngAfterViewChecked(): void {
    console.log("--ngAfterViewChecked works!");
  }
  ngOnDestroy(): void {
    console.log("--ngOnDestroy works!");
  }

  ngOnInit(): void {
     this.childData = 0
     console.log("ngOnInit work!");
  }

  OnClick2Parent() {
    this.childData += 1
    this.messageEvent.emit(this.childData)
  }
}
