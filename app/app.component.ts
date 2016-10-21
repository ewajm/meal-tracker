import { Component } from '@angular/core';
import { Fud } from './fud.model';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <div class = "jumbotron">
      <h1>You're Doing Great!</h1>
      <div class="form" *ngIf="!fudToEdit">
        <new-fud
          (newFudSender) = "addFud($event)"
        ></new-fud>
      </div>
      <div class="form" *ngIf="fudToEdit">
        <edit-fud
          [childFudToEdit] = "fudToEdit"
          (editDoneSender) = "finishedEditing()"
        ></edit-fud>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <fud-list
          [childFudList] = "masterFudList"
          (editFudSender) = "sendToEdit($event)"
        ></fud-list>
      </div>
      <div class="col-sm-4">
        <summary-display
          [summaryFudList] = "masterFudList"
        ></summary-display>
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
