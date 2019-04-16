import {Pipe, PipeTransform} from '@angular/core';
import { User } from './models/user.model';

@Pipe({
  name: "SearchUserFirstNamePipe",
  pure: false
})

export class SearchUserFirstNamePipe implements PipeTransform {
  transform(input: any[], searchString: string): any[] {
    if(!input) return [];
    if(!searchString) return [];

    searchString = searchString.toLowerCase();

    return input.filter((it:any) =>
      it.firstName.toLowerCase().includes(searchString))
  }
}
