import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './models/order.model';

@Pipe({
  name: 'completeness',
  pure: true
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Order[]) {
    let output: Order[] = [];
    for(let i=0; i<input.length; i++){
      if(input[i].status==="INCOMPLETED"){
        output.push(input[i]);
      }
    }
    return output;
  }

}
