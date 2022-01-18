import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TimelinesComponent } from './timelines/timelines.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    RatingBarComponent,
    DemoOutputComponent,
    DemoFormComponent,
    TodoComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
