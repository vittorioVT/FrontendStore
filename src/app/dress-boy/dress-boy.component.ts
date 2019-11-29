import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dress-boy',
  templateUrl: './dress-boy.component.html',
  styleUrls: ['./dress-boy.component.css']
})
export class DressBoyComponent implements OnInit {

  myColor: string;

  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    this.myColor = color;
  }

}
