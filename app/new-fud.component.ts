import { Component, Output, EventEmitter } from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'new-fud',
  template: `
  <div class="row">
    <div class="col-md-9">
      <div class="form-group">
        <label class="col-sm-2">Food Name: </label>
        <div class="col-sm-10">
          <input class="form-control" #newName required>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2">Calories: </label>
        <div class="col-sm-10">
          <input class="form-control" #newCalories type="number">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2">Details: </label>
        <div class="col-sm-10">
          <input class="form-control" #newDetails placeholder="e.g. Didn't eat hamburger bun">
        </div>
      </div>
    </div>
    <div class="col-md-3">
          <button class="btn btn-success btn-lg center-block" (click)="saveFud(newName.value, newCalories.value, newDetails.value); newName.value=''; newCalories.value=''; newDetails.value=''">Log Food!</button>
    </div>
  </div>
  `
})

export class NewFudComponent {
  @Output() newFudSender = new EventEmitter();
  saveFud(name: string, calories: string, details: string){
    var caloriesNum: number = parseInt(calories);
    var newFudToAdd: Fud = new Fud(name, caloriesNum, details);
    this.newFudSender.emit(newFudToAdd);
  }
}
