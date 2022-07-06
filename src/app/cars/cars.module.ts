import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


@NgModule({
  declarations: [
    CarsComponent, DashboardComponent, CarDetailComponent
  ],
  imports: [
    CarsRoutingModule,
    CommonModule,
    ComponentsModule
  ]
})
export class CarsModule { }
