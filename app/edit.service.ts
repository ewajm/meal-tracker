import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Fud } from './fud.model'

@Injectable()
export class EditService {

  private fud: Fud;
  private subject: Subject<Fud> = new Subject<Fud>();

  setEdit(fud: Fud): void {
    this.fud = fud;
    this.subject.next(fud);
  }

  getEdit(): Observable<Fud> {
    return this.subject.asObservable();
  }
}
