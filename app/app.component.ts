import { Component } from '@angular/core';
import { Fud } from './fud.model';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <div class = "jumbotron">
      <h1>You're Doing Great!</h1>
      <div *ngIf="!fudToEdit">
        <new-fud
          (newFudSender) = "addFud($event)"
        ></new-fud>
      </div>
      <div *ngIf="fudToEdit">
        <edit-fud
          [childFudToEdit] = "fudToEdit"
          (editDoneSender) = "finishedEditing()"
        ></edit-fud>
      </div>
    </div>
    <fud-list
      [childFudList] = "masterFudList"
      (editFudSender) = "sendToEdit($event)"
    ></fud-list>
  </div>
  `
})

export class AppComponent {
  public masterFudList: Fud[] = [
    new Fud("burger", 900, "no bun")
  ];
  public terribleFudList: Fud[] = [
    new Fud("IHOP Chorizo Fiest Omelette", 1990, "Comes with 3 pancakes - Yikes!"),
    new Fud("Cheesecake Factory Warm Apple Crisp", 1740, "More calories than the actual cheesecakes!"),
    new Fud("Steak 'n Shake 7x7 Steakburger 'n Fries", 2290, "Seven patties! SEVEN!!"),
    new Fud("Dickey’s Barbecue Pit 3 Meat Plate", 3816, "Three meets, 2 sides, and ice cream"),
    new Fud("Outback Steakhouse Herb Prime Rib", 2404, "What kind of herbs are they even using?")
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
