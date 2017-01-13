import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { ProductService } from '../services/product.service';
import { Cart } from '../mock/mock-cart';

@Component({
  selector: 'app-product',
  templateUrl: 'app/templates/home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  allpro: Product[] = [];

  ngOnInit(): void {
    this.productService.getallProduct()
      .then(allpro => this.allpro = allpro.slice(0, 3));
  }

  selectedProduct: Product;

  addToCart(selectedProduct: Product): void {
    Cart.push(selectedProduct);
  }
}
