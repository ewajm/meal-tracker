import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewFudComponent } from './new-fud.component';
import { FudListComponent } from './fud-list.component';
import { FudDisplayComponent } from './fud.component';
import { EditFudComponent } from './edit-fud.component';
import { CaloriesPipe } from './calories.pipe';
import { TotalPipe } from './total.pipe';
import { AveragePipe } from './average.pipe';
import { WorsePipe } from './worse.pipe';
import { SummaryDisplay } from './summary.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFudComponent,
    FudListComponent,
    FudDisplayComponent,
    EditFudComponent,
    CaloriesPipe,
    TotalPipe,
    AveragePipe,
    SummaryDisplay,
    WorsePipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
