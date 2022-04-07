import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from '../../four-section/four-section.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input('product') product: Product | undefined;
  @Input('invert') invert: boolean = false;

  movil: boolean = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (window.innerWidth < 700) {
      this.invert = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
  }

}
