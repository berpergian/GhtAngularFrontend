import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Cart } from '../mock/mock-cart';

@Component({
  selector: 'app-product',
  templateUrl: 'app/templates/product.component.html'
})

export class ProductComponent implements OnInit {

  allpro: Product[];

  constructor(
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.getallMenu();
  }
}
