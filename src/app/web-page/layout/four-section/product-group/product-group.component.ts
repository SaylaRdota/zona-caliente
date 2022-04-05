import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from '../four-section.component';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.sass']
})
export class ProductGroupComponent implements OnInit {
  @Input('products') products: Array<Product> = [];
  constructor() { }

  

  ngOnInit(): void {
  }

}
