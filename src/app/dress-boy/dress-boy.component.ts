import { Component, OnInit } from '@angular/core';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';

@Component({
  selector: 'app-dress-boy',
  templateUrl: './dress-boy.component.html',
  styleUrls: ['./dress-boy.component.css']
})
export class DressBoyComponent implements OnInit {

  dressboy: ProductElements[]; 

  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.dressboy = data.filter(x => x.Comment.includes('dressboy'));
    })

  }

}
