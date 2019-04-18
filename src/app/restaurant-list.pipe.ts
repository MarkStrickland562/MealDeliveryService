import {Pipe, PipeTransform} from '@angular/core';
import { Restaurant } from './models/restaurant.model';

@Pipe({
  name: "filterRestaurantsPipe",
  pure: false
})

export class FilterRestaurantsPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.cuisine.toLowerCase().includes(searchString))
  }
}
