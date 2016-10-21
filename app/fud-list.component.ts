import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

//TODO: use service for editing so I can put the button in the food component instead

@Component ({
  selector: 'fud-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all">Show all</option>
      <option value="high">Show only high calorie foods</option>
      <option value="low">Show only low calories foods</option>
    </select>
    <h3 *ngIf="childFudList.length > 0">Food List!</h3>
      <h3 *ngIf="childFudList.length === 0">No Foods yet!</h3>
    <div class="well" *ngFor="let currentFud of childFudList | calories: calorieFilter">
      <fud-display
        [fud]="currentFud"
      ></fud-display>
      <button class="btn btn-warning" (click)="passUpFud(currentFud)">Edit Food</button>
    </div>
  `
})

export class FudListComponent {
  @Input() childFudList: Fud[];
  @Output() editFudSender = new EventEmitter();
  public calorieFilter: string = "all";
  passUpFud(fudtoEdit){
    this.editFudSender.emit(fudtoEdit);
  }
  onChange(option){
    this.calorieFilter = option;
  }
}
