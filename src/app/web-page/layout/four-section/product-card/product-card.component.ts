import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../four-section.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
