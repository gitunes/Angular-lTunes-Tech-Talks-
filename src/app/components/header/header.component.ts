

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showNatification: boolean = false
  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {

  }
  deleteItem($event: any) {
    this.cartService.removeItem($event)
  }
}
