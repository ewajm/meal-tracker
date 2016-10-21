import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'edit-fud',
  template: `
    <h3>Edit Food</h3>
    <div class="form-group">
      <label>Food Name: </label>
      <input class="form-control" [(ngModel)]="childFudToEdit.name" required>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input class="form-control" [(ngModel)]="childFudToEdit.calories" type="number">
    </div>
    <div class="form-group">
      <label>Details (e.g. Didn't eat hamburger bun): </label>
      <input class="form-control"  [(ngModel)]="childFudToEdit.details">
    </div>
    <button class="btn btn-success" (click)="editDoneClicked()">Finish Editing!</button>
  `
})

export class EditFudComponent {
  @Input() childFudToEdit: Fud;
  @Output() editDoneSender = new EventEmitter();
  editDoneClicked(){
    this.editDoneSender.emit();
  }
}
