import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

//TODO: use service for editing so I can put the button in the food component instead

@Component ({
  selector: 'fud-list',
  template: `
    <h3 *ngIf="childFudList.length > 0">Food List!</h3>
    <select *ngIf="childFudList.length > 0" (change)="onChange($event.target.value)">
      <option value="all">Show all</option>
      <option value="high">Show only high calorie foods</option>
      <option value="low">Show only low calories foods</option>
    </select>
      <h3 *ngIf="childFudList.length === 0">No Foods yet!</h3>
    <div class="food" *ngFor="let currentFud of childFudList | calories: calorieFilter">
      <fud-display
        [fud]="currentFud"
      ></fud-display>
    </div>
  `
})

export class FudListComponent {
  @Input() childFudList: Fud[];
  @Output() editFudSender = new EventEmitter();
  public calorieFilter: string = "all";
  onChange(option){
    this.calorieFilter = option;
  }
}
