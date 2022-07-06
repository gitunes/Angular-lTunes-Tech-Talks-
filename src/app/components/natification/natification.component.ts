import { CartService } from '../../core/services/cart.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-natification',
  templateUrl: './natification.component.html',
  styleUrls: ['./natification.component.scss']
})
export class NatificationComponent implements OnInit {
  @Output() closeNatificationEvent = new EventEmitter<boolean>()
  @Output() deleteItemEvent = new EventEmitter<number>()
  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.carts.subscribe(res => console.log(res))
  }
  close(value: boolean) {
    this.closeNatificationEvent.emit(value)
  }
  deleteEvent(index: number, data: any) {
    this.deleteItemEvent.emit({ index, ...data })
  }


}
