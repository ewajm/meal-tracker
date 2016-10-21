import { Component, Input, EventEmitter } from '@angular/core';
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
  `
})

export class FudDisplayComponent {
  @Input() fud: Fud;
}
