import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';


@Component({
  selector: 'app-attributs-pl',
  templateUrl: './attributs-pl.component.html',
  styleUrls: ['./attributs-pl.component.css']
})
export class AttributsPlComponent implements OnInit {

  attribut: ProductElements[];


  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.attribut = data.filter(x => x.Comment.includes('attributs'));
    })
  }

}
