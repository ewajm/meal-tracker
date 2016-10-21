import { Component, Input, EventEmitter } from '@angular/core';
import { EditService } from './edit.service';
import { Fud } from './fud.model';

@Component ({
  selector: 'fud-display',
  template: `
    <div class="row">
      <div class="col-sm-4">
      <p>{{fud.name}}</p>
      </div>
      <div class="col-sm-4">
      <p>{{fud.details}}</p>
      </div>
      <div class="col-sm-4">
      <p>{{fud.calories}}</p>
      </div>
    </div>
    <button class="btn btn-warning center-block" (click)="passUpFud(fud)">Edit Food</button>
  `
})

export class FudDisplayComponent {
  @Input() fud: Fud;

  constructor(private editService: EditService){}
  passUpFud(fudtoEdit){
    this.editService.setEdit(fudtoEdit);
  }
}
