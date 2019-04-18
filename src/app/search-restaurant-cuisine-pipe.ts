import {Pipe, PipeTransform} from '@angular/core';
import { Restaurant } from './models/restaurant.model';

@Pipe({
  name: "SearchRestaurantCuisinePipe",
  pure: false
})

export class SearchRestaurantCuisinePipe implements PipeTransform {
  transform(input: any[], searchString: any[]) {
    if(!searchString.length){
      return input;
    }
    let output: any[] = [];
    for(let i = 0; i<input.length; i++){
      if(searchString.includes(input[i].cuisine.toLowerCase())){
        output.push(input[i]);
      }
    }
    return output;


  //
  //   if(!searchString) return input;
  //
  //   return input.filter((it) =>
  //     it.cuisine.includes(searchString))
  //
  }
}
