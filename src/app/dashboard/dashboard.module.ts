import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
  ],

})
export class DashboardModule { }
