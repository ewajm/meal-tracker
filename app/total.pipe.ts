import { Pipe, PipeTransform} from '@angular/core';
import { Fud } from './fud.model';

@Pipe ({
  name:"total",
  pure: false
})

export class TotalPipe implements PipeTransform {
  transform(input: Fud[]){
    var output: number =0;
    for(var i = 0; i < input.length; i ++){
      output += input[i].calories;
    }
    return output;
  }
}
