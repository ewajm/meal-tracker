import { Component, Input, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector:'summary-display',
  template: `
  <h3>Total Calories: {{ summaryFudList | total }}</h3>
  <h3>Average Calories/Food: {{ summaryFudList | total | average: summaryFudList.length }}</h3>
  <div>
    <h4>Could Be Worse Meter: </h4>
    <p>Everything you have eaten today is still fewer calories than: </p>
    <div class="row" *ngFor="let fud of summaryFudList | total | worse">
      <div class="col-sm-10">{{fud.name}}</div>
      <div class="col-sm-2">{{fud.calories}}</div>
    </div>
  </div>
  `
})

export class SummaryDisplay {
  @Input() summaryFudList: Fud[];
}
