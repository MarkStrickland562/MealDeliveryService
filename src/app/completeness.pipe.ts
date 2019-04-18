import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './models/order.model';

@Pipe({
  name: 'completeness',
  pure: false
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Order[]) {
    var output: Order[];
    for(let i=0; i<input.length; i++){
      if(input[i].status==="INCOMPLETED"){
        output.push(input[i]);
      }
    }
    return output;
  }

}
