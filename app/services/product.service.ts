import { Injectable } from '@angular/core';
import { Product } from '../class/product';
import { PRODUCTS } from '../mock/mock-allproduct';
import { Cart } from '../mock/mock-cart';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ProductService {

  constructor(private http: Http){}

  allpro: Product[];
  apiUrl: string = 'http://127.0.0.1:8000/Produk/';
  imgUrl: string = 'http://127.0.0.1:8000/image/'

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getallProductbyCategory(kategori: string): Promise<Product[]> {
    /*return Promise.resolve(this.getallProduct()
      .then(allpro => allpro.find(product => product.jenispro === 'Handphone')));*/
      return this.http
        .get(this.apiUrl+'?jenis='+kategori)
        .map((response: Response) => {
          let pro = response.json();
          //console.log(pro);
          let listProduct = new Array<Product>();
          let i : number;
          for(i=0;i<pro.results.length;i++)
          {
            listProduct.push(
            {
              kode: pro.results[i].kode_produk,
              nama: pro.results[i].nama_produk,
              jenispro: pro.results[i].jenis_produk,
              harga: pro.results[i].harga.latest_harga,
              deskripsi: pro.results[i].deskripsi,
              urlgambar: this.imgUrl + pro.results[i].stock[0]
            });
            //console.log(pro.results[i].stock[0]);
          }
          return listProduct;
        }).toPromise().catch(this.handleError);
  }

  /*getallProduct(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }*/

  getallProduct(): Promise<Product[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => {
        let pro = response.json();
        let listProduct = new Array<Product>();
        let i : number;
        for(i=0;i<pro.length;i++)
        {
          listProduct.push(
          {
            kode: pro.results[i].kode_produk,
            nama: pro.results[i].nama_produk,
            jenispro: pro.results[i].jenis_produk,
            harga: pro.results[i].harga.latest_harga,
            deskripsi: pro.results[i].deskripsi,
            urlgambar: pro.results[i].stock[0].Gambar
          });
        }
        return listProduct;
      }).toPromise()
      .catch(this.handleError);
  }

  getallCart(): Promise<Product[]> {
    return Promise.resolve(Cart);
  }

  /*getProduct(kode: string): Promise<Product> {
      return this.getallProduct()
        .then(allpro => allpro.find(product => product.kode === kode));
  }

  getallMenu(): void {
      this.getallProduct().then(allpro => this.allpro = allpro);
  }*/

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
