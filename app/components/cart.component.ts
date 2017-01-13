import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../class/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'app/templates/cart.component.html',
  styleUrls: [ 'app/css/cart.component.css' ]
})

export class CartComponent implements OnInit {
  allpro: Product[];
  total: number;

  constructor(
    private router: Router,
    private productService: ProductService) { }

    getallProduct(): void {
      this.productService.getallCart().then(allpro => this.allpro = allpro);
    }

    getsumTotal(): void {
      this.productService.getsumTotal().then(total => this.total = total);
    }

  ngOnInit(): void {
    this.getallProduct();
    this.getsumTotal();
  }
}
