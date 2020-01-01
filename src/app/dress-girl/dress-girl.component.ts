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

  hello() {
    console.log("Hello", this)
  }

  person = {
    name: 'Viktor', age: 48, sayHello: this.hello.bind(document),
    logInfo: function (job, phone) {
      console.group(`${this.name} info: `);
      console.log(`Name is ${this.name}`);
      console.log(`Age is ${this.age}`);
      console.log(`Job is ${job}`);
      console.log(`Phone is ${phone}`);
      console.groupEnd();
    }
  }

  lena = {
    name: 'Elena', age: 33
  }

  fnLenaInfoLog = this.person.logInfo.bind(this.lena, 'Frontend', '050-412-22-28');

  fnLenaInfoLog1 = this.person.logInfo.call(this.lena, 'Santa-Claus', '912');

    fnApply = this.person.logInfo.apply(this.lena, ['Backend', '88818']);

  

  
    
}


