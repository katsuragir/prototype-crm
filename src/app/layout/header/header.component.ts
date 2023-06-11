import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartList!: any[];
  showCart: boolean = false;
  constructor(
    private router: Router
  ) {
    this.cartList = JSON.parse(localStorage.getItem('cart-atria')!);
  }

  openCart() {
    this.showCart = !this.showCart;
  }

  goToCart() {
    this.router.navigateByUrl('/transaksi/cart');
    this.showCart = false;
  }
}
