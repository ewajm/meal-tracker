import { Component, Input, EventEmitter } from '@angular/core';
import { EditService } from './edit.service';
import { Fud } from './fud.model';

@Component ({
  selector: 'fud-display',
  template: `
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <p>{{fud.name}}</p>
      </div>
      <div class="col-md-4 col-sm-6">
        <p>{{fud.details}}</p>
      </div>
      <div class="col-md-2 col-sm-6">
        <p>{{fud.calories}}</p>
      </div>
      <div class="col-md-2 col-sm-6">
        <button class="btn btn-warning btn-sm center-block" (click)="passUpFud(fud)">Edit Food</button>
      </div>
    </div>
  `
})

export class FudDisplayComponent {
  @Input() fud: Fud;

  constructor(private editService: EditService){}
  passUpFud(fudtoEdit){
    this.editService.setEdit(fudtoEdit);
  }
}
