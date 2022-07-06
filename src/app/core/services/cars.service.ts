import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Car } from '../interfaces/Car';

@Injectable()

export class CarsService {
  private _cars = new BehaviorSubject<Car[]>([])
  readonly cars$ = this._cars.asObservable()
  constructor(
    private api: HttpClient
  ) {
    this.fetchCars()
  }
  fetchCars(): Observable<Car[]> {
    this.api.get<Car[]>("http://localhost:3000/cars")
      .subscribe(res => this._cars.next(res))
    return this.cars$
  }
  fetchCar(carId: string): Observable<Car[]> {
    return this.api.get<Car[]>('http://localhost:3000/cars/' + carId);
  }

  get cars() {
    return this.cars$
  }
}
