import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList!: any[];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartList = JSON.parse(localStorage.getItem('cart-atria')!);

    if (!this.cartList) {
      this.router.navigateByUrl('/home');
    }
  }

  updateQuantity(cart: any, type: string) {
    console.log(cart);
    if (type == 'minus') {
      cart.qty = (cart.qty - 1 === 0) ? 1 : cart.qty - 1;
    } else {
      cart.qty = cart.qty + 1;
    }
  }

  removeCart(cart: any) {
    // Find the index of the item to be removed in the cartItems array
    const index = this.cartList.findIndex(cartItem => cartItem.id === cart.id);

    // Remove the item from the cartItems array
    if (index > -1) {
      this.cartList.splice(index, 1);
    }
  }

}
