import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fud } from './fud.model';
import { EditService } from './edit.service'

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <div class = "jumbotron">
      <h1>You're Doing Great</h1>
      <h3>A Non-Judgemental Meal-Tracker</h3>
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
      <div class="col-md-8">
        <div class="list">
          <fud-list
            [childFudList] = "masterFudList"
          ></fud-list>
        </div>
      </div>
      <div class="col-md-4">
        <div class="summary">
          <summary-display
            [summaryFudList] = "masterFudList"
          ></summary-display>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [EditService]
})

export class AppComponent implements OnInit{
  public masterFudList: Fud[] = [
    new Fud("burger", 900, "no bun")
  ];
  public fudToEdit: Fud = null;
  constructor(private editService: EditService){}

  ngOnInit(){
    this.editService.getEdit().subscribe((fud: Fud)=>{
      this.fudToEdit = fud;
    });
  }

  addFud(newFudFromChild: Fud) {
    this.masterFudList.push(newFudFromChild);
  }
  sendToEdit(sentFud){
    this.fudToEdit = sentFud;
  }
  finishedEditing(){
    this.fudToEdit = null;
  }
}
