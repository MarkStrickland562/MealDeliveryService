import {Pipe, PipeTransform} from '@angular/core';
import { Restaurant } from './models/restaurant.model';

@Pipe({
  name: "SearchRestaurantCuisinePipe",
  pure: false
})

export class SearchRestaurantCuisinePipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.cuisine.toLowerCase().includes(searchString))
  }
}
