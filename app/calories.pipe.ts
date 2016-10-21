import { Pipe, PipeTransform} from '@angular/core';
import { Fud } from './fud.model';

@Pipe ({
  name:"calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Fud[], desiredCalories){
    if(desiredCalories === "high"){
      return input.filter(function(fud){
        return fud.calories > 500;
      });
    } else if(desiredCalories === "low"){
      return input.filter(function(fud){
        return fud.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
