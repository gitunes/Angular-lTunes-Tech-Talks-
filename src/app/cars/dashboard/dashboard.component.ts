import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CarsService } from '../../core/services/cars.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cars: Car[] = []
  carsSubscription!: Subscription;
  constructor(
    private carsService: CarsService,
    private cartService: CartService,
    private route: Router
  ) { }
  ngOnDestroy(): void {
    this.carsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.getCars()
  }
  getCars() {
    this.carsSubscription = this.carsService.cars$.subscribe((res: Car[]) => this.cars = res)
  }
  addItem(car: Car) {
    this.cartService.addItem(car)
  }
  openCarDetail(carId: string) {
    this.route.navigateByUrl('/main/car/' + carId)
  }
}
