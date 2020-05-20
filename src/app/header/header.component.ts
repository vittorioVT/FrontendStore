import { Component, OnInit } from '@angular/core';
import { AuthFrontService } from '../auth-front.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  
  constructor(private auth: AuthFrontService ) { }

  ngOnInit() {
   
  }
}

