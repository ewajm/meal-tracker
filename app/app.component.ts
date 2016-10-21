import { Component } from '@angular/core';
import { Fud } from './fud.model';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <div class = "jumbotron">
      <h1>You're Doing Great!</h1>
      <div class="form-horizontal">
        <new-fud *ngIf="!fudToEdit"
          (newFudSender) = "addFud($event)"
        ></new-fud>
        <edit-fud *ngIf="fudToEdit"
          [childFudToEdit] = "fudToEdit"
          (editDoneSender) = "finishedEditing()"
        ></edit-fud>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="list">
          <fud-list
            [childFudList] = "masterFudList"
            (editFudSender) = "sendToEdit($event)"
          ></fud-list>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="summary">
          <summary-display
            [summaryFudList] = "masterFudList"
          ></summary-display>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFudList: Fud[] = [
    new Fud("burger", 900, "no bun")
  ];
  addFud(newFudFromChild: Fud) {
    this.masterFudList.push(newFudFromChild);
  }
  public fudToEdit: Fud = null;
  sendToEdit(sentFud){
    this.fudToEdit = sentFud;
  }
  finishedEditing(){
    this.fudToEdit = null;
  }
}
