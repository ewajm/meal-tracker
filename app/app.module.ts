import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewFudComponent } from './new-fud.component';
import { FudListComponent } from './fud-list.component';
import { FudDisplayComponent } from './fud.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    NewFudComponent,
    FudListComponent,
    FudDisplayComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
