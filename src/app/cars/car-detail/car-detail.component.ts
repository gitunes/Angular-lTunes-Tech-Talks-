import { CarsService } from '../../core/services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CartService } from 'src/app/core/services/cart.service';
import { Car, carInitialState } from 'src/app/core/interfaces/Car';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  carId!: string
  car: Car = new carInitialState();
  params$!: Observable<any>;
  apiUrl = 'http://localhost:3000/cars/'
  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
    private cartService: CartService
  ) {


  }
  addCart() {
    this.cartService.addItem(this.car)
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(res => console.log(res))
    this.params$ = this.route.params.pipe(
      map((params: any) => params.id),
      switchMap((paramId) => ajax.getJSON(this.apiUrl + paramId))
    )
    this.params$.subscribe(res => this.car = res)

    // RXJS OLMADAN ALTERNATIF YONTEM
    // this.route.params.subscribe(params => {
    //   this.carId = params['id']
    
    //   this.carService.fetchCar(this.carId).subscribe(res => {
    //     this.car = res
    
    //   })
    // })
  }

}
