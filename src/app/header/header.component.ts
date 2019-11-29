import { Component, OnInit } from '@angular/core';
import { AuthFrontService } from '../auth-front.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private auth: AuthFrontService ) { }

  ngOnInit() {
   
  }
}

