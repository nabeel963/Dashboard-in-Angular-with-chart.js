import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { ChartComponent } from './chart/chart.component';
import { default as Annotation } from 'chartjs-plugin-annotation'

@NgModule({
  imports: [BrowserModule, FormsModule, NgChartsModule.forRoot({
    defaults: {},
    plugins: [ Annotation ]
  }),],
  declarations: [AppComponent, ChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
