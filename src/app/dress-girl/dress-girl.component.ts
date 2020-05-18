import { Component, OnInit } from '@angular/core';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';


@Component({
  selector: 'app-dress-girl',
  templateUrl: './dress-girl.component.html',
  styleUrls: ['./dress-girl.component.css']
})
export class DressGirlComponent implements OnInit {

  dressGirl: ProductElements[];

  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.dressGirl = data.filter(x => x.Comment.includes('dressgirl'));
    })

  }
}




