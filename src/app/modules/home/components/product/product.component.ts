import { Component, OnInit } from '@angular/core';
import { product } from 'src/assets/mock/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: any[] = product.content;

  constructor(){}

  ngOnInit(): void {

  }

  addCart(product: any) {
    const cartList: any[] = JSON.parse(localStorage.getItem('cart-atria')!);
    if (cartList) {
      const existing = cartList.findIndex( x => x.id === product.id) + 1;
      if (existing) {
        cartList[existing - 1].qty += 1;
        localStorage.setItem('cart-atria', JSON.stringify(cartList));
      } else {
        const cart = {
          id: product.id,
          name: product.name,
          image: product.image,
          category: product.category,
          price: product.price,
          qty: 1
        }
        cartList.push(cart);
        localStorage.setItem('cart-atria', JSON.stringify(cartList));
      }
    } else {
      const lists= [];
      const cart = {
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
        price: product.price,
        qty: 1
      }
      lists.push(cart);
      return localStorage.setItem('cart-atria', JSON.stringify(lists));
    }
  }
}
