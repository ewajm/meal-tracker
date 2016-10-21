import { Pipe, PipeTransform} from '@angular/core';
import { Fud } from './fud.model';

//uses total from the meal list to output a/some ridiculously high caloried meals to make you feel better about how much you did eat

@Pipe ({
  name:"worse",
  pure: false
})

export class WorsePipe implements PipeTransform {
  public terribleFudList: Fud[] = [
    new Fud("Burger King Triple Whopper", 1020, "Not as bad as I thought"),
    new Fud("Smoothie King Peanut Power Plus Grape Smoothie", 1460, ""),
    new Fud("Cheesecake Factory Warm Apple Crisp", 1740, "More calories than the actual cheesecakes!"),
    new Fud("IHOP Chorizo Fiest Omelette", 1990, "Comes with 3 pancakes - Yikes!"),
    new Fud("Steak 'n Shake 7x7 Steakburger 'n Fries", 2290, "Seven patties! SEVEN!!"),
    new Fud("Outback Steakhouse Herb Prime Rib", 2404, "What kind of herbs are they even using?"),
    new Fud("Cheesecake Factory Bistro Shrimp Pasta", 3120, ""),
    new Fud("Dickey’s Barbecue Pit 3 Meat Plate", 3816, "Three meets, 2 sides, and ice cream")
  ];

  transform(input: number){
    var output: Fud[] = [];
    //initially just find food that is higher calorie than total food in list
    for(var i = 0; i < this.terribleFudList.length; i++){
      if(this.terribleFudList[i].calories > input){
        output.push(this.terribleFudList[i]);
        break;
      }
    }
    //in the terrifying event the list has gone over 3816, keep adding to output until the output total is greater than the input total
    if(output.length === 0){
      var total = 0;
      while(total < input){
        for(var i = 0; i < this.terribleFudList.length; i++){
            output.push(this.terribleFudList[i]);
            total+= this.terribleFudList[i].calories;
            if(total > input){
              break;
            }
        }
      }
    }
    return output;
  }
}
