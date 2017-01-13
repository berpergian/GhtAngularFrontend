import { Injectable } from '@angular/core';
import { Product } from '../class/product';
import { PRODUCTS } from '../mock/mock-allproduct';
import { Cart } from '../mock/mock-cart';

@Injectable()
export class ProductService {

  allpro: Product[];

  getallProduct(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getallCart(): Promise<Product[]> {
    return Promise.resolve(Cart);
  }

  getProduct(kode: string): Promise<Product> {
      return this.getallProduct()
        .then(allpro => allpro.find(product => product.kode === kode));
  }

  getallMenu(): void {
      this.getallProduct().then(allpro => this.allpro = allpro);
  }

  getsumTotal(): Promise<number> {
    var total: number = 0;
    for (let cart of Cart) {
      total += cart.harga;
    }
    return Promise.resolve(total);
  }
  removeitemCart(index: number) {
      if (index > -1) {
        this.allpro.splice(index, 1);
      }
  }
}
