import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'fud-list',
  template: `
    <h3 *ngIf="childFudList.length > 0">Food List!</h3>
      <h3 *ngIf="childFudList.length === 0">No Foods yet!</h3>
    <div class="well" *ngFor="let currentFud of childFudList">
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
  passUpFud(fudtoEdit){
    this.editFudSender.emit(fudtoEdit);
  }
}
