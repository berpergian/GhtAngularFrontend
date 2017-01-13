import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'alamatBelumPunya',
  templateUrl: 'app/templates/alamatBelumPunya.component.html'
})


export class alamatBelumPunya {
  public items:Array<string> = ['DKI Jakarta', 'Bandung', 'Semarang', 'Surabaya',
    ];

  public items1:Array<string> = ['item 1', 'item 2', 'item 3', 'item 4',
    'item 5'];

   public items2:Array<string> = ['item a', 'item b', 'item c', 'item d',
    'item e'];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}
