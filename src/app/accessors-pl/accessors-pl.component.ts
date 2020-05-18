import { Component, OnInit } from '@angular/core';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';

@Component({
  selector: 'app-accessors-pl',
  templateUrl: './accessors-pl.component.html',
  styleUrls: ['./accessors-pl.component.css']
})
export class AccessorsPlComponent implements OnInit {

  accessors: ProductElements[];


  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.accessors = data.filter(x => x.Comment.includes('accessors'));
    })

  }

}
