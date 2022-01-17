import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormsModule} from "@angular/forms";
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    RatingBarComponent,
    DemoOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
