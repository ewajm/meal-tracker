import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'edit-fud',
  template: `
  <div class="row">
    <div class="col-sm-9">
      <div class="form-group">
        <label class="col-sm-2">Food Name: </label>
        <div class="col-sm-10">
          <input class="form-control" [(ngModel)]="childFudToEdit.name" required>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2">Calories: </label>
        <div class="col-sm-10">
          <input class="form-control" [(ngModel)]="childFudToEdit.calories" type="number">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2">Details: </label>
        <div class="col-sm-10">
          <input class="form-control"  [(ngModel)]="childFudToEdit.details">
        </div>
      </div>
    </div>
    <div class="col-sm-3">
        <button class="btn btn-success btn-lg center-block" (click)="editDoneClicked()">Finish Editing!</button>
    </div>
  </div>
  `
})

export class EditFudComponent {
  @Input() childFudToEdit: Fud;
  @Output() editDoneSender = new EventEmitter();
  editDoneClicked(){
    this.editDoneSender.emit();
  }
}
