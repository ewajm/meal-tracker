import { Component, Output, EventEmitter } from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'new-fud',
  template: `
    <h3>Log A Food</h3>
    <div class="form-group">
      <label>Food Name: </label>
      <input class="form-control" #newName required>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input class="form-control" #newCalories type="number">
    </div>
    <div class="form-group">
      <label>Details (e.g. Didn't eat hamburger bun): </label>
      <input class="form-control" #newDetails>
    </div>
    <button class="btn btn-success" (click)="saveFud(newName.value, newCalories.value, newDetails.value); newName.value=''; newCalories.value=''; newDetails.value=''">Log Food!</button>
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
