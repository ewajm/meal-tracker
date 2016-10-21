import { Component } from '@angular/core';
import { Fud } from './fud.model';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <div class = "jumbotron">
      <h1>You're Doing Great!</h1>
      <new-fud
        (newFudSender) = "addFud($event)"
      ></new-fud>
    </div>
    <fud-list
      [childFudList] = "masterFudList"
    ></fud-list>
  </div>
  `
})

export class AppComponent {
  public masterFudList: Fud[] = []
  addFud(newFudFromChild: Fud) {
    this.masterFudList.push(newFudFromChild);
  }
}
