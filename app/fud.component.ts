import { Component, Input, EventEmitter } from '@angular/core';
import { Fud } from './fud.model';

@Component ({
  selector: 'fud-display',
  template: `
    <div class="row">
      <div class="col-sm-6">
        <h3>{{fud.name}}</h3>
      </div>
      <div class="col-sm-6">
        <h3>{{fud.calories}}</h3>
      </div>
    </div>
    <div class="row">
      <p>{{fud.details}}</p>
    </div>
  `
})

export class FudDisplayComponent {
  @Input() fud: Fud;
}
