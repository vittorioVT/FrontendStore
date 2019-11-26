import { Pipe, PipeTransform } from '@angular/core';
import { ProductElements } from './Interfaces/productElements';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {



  transform(datasource, value) {
    console.log(value);
    
    return datasource.filter(items => {
      return items.Name.includes(value);
    })
  }
}
