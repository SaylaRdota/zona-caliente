import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.sass']
})
export class ThirdSectionComponent implements OnInit {

  icons: Array<{src: string, text: string}> = [
    {
      src: 'assets/icons/clothes.png',
      text: 'ropa'
    },
  {
      src: 'assets/icons/light.png',
      text: 'luminaria'
    },
  {
      src: 'assets/icons/briefcase.png',
      text: 'bolso'
    },
  {
      src: 'assets/icons/shoose.png',
      text: 'zapatos'
    },
  {
      src: 'assets/icons/shop.png',
      text: 'ferretería'
    },
  {
      src: 'assets/icons/cosmetics.png',
      text: 'cosméticos'
    },
  {
      src: 'assets/icons/perfume.png',
      text: 'perfumes'
    },
  {
      src: 'assets/icons/electronic.png',
      text: 'electrónica'
    },
  {
      src: 'assets/icons/office.png',
      text: 'artículos de oficina'
    },
  {
      src: 'assets/icons/hat.png',
      text: 'sombreros'
    },
  {
      src: 'assets/icons/cup.png',
      text: 'jarras'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
