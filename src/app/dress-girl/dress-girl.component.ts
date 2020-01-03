import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dress-girl',
  templateUrl: './dress-girl.component.html',
  styleUrls: ['./dress-girl.component.css']
})
export class DressGirlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  urlGenerator(domain) {
    return function (url) {
      return console.log(`http://${url}.${domain}`);
    }
  }

  comUrl = this.urlGenerator('com');




}




