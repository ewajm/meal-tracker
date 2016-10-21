import { Component, Input, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector:'summary-display',
  template: `
  <h3>Total Calories: {{ summaryFudList | total }}</h3>
  <h3>Average Calories/Food: {{ summaryFudList | total | average: summaryFudList.length }}</h3>
  <div class="worse">
    <h4>Could Be Worse Meter: </h4>
    <p>Everything you have eaten today is still fewer calories than: </p>
    <div class="food-row" *ngFor="let fud of summaryFudList | total | worse">
      <p>{{fud.name}}<p>
      <p>Calories: {{fud.calories}}<p>
    </div>
  </div>
  `
})

export class SummaryDisplayComponent {
  @Input() summaryFudList: Fud[];
}
