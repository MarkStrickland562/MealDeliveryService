import {Pipe, PipeTransform} from '@angular/core';
import { User } from './models/user.model';

@Pipe({
  name: "SearchUserPipe",
  pure: false
})

export class SearchUserPipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.name.toLowerCase().includes(searchString))
  }
}
