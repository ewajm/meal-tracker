import { Component, Input, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector:'summary-display',
  template: `
  <h3>Total Calories: {{ summaryFudList | total }}</h3>
  <h3>Average Calories/Food: {{ summaryFudList | total | average: summaryFudList.length }}</h3>
  `
})

export class SummaryDisplay {
  @Input() summaryFudList: Fud[];
  public terribleFudList: Fud[] = [
    new Fud("IHOP Chorizo Fiest Omelette", 1990, "Comes with 3 pancakes - Yikes!"),
    new Fud("Cheesecake Factory Warm Apple Crisp", 1740, "More calories than the actual cheesecakes!"),
    new Fud("Steak 'n Shake 7x7 Steakburger 'n Fries", 2290, "Seven patties! SEVEN!!"),
    new Fud("Dickey’s Barbecue Pit 3 Meat Plate", 3816, "Three meets, 2 sides, and ice cream"),
    new Fud("Outback Steakhouse Herb Prime Rib", 2404, "What kind of herbs are they even using?")
  ];
}
