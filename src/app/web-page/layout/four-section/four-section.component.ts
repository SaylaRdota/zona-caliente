import { Component, HostListener, OnInit } from '@angular/core';

export interface Product {
  title: string,
  subtitle: string,
  description: string,
  url: string
};

@Component({
  selector: 'app-four-section',
  templateUrl: './four-section.component.html',
  styleUrls: ['./four-section.component.sass']
})
export class FourSectionComponent implements OnInit {

  products: Array<Product> = [
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/1~2.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/2~2.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/3~1.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/4~1.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/5~1.png'
    },
    // {
    //   title: 'Bolso juvenil de Poly',
    //   subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
    //   description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
    //   url: 'assets/images/6~1.png'
    // },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/7~1.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/8~1.png'
    },
    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/9~1.png'
    },

    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/10~1.png'
    },

    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/11.png'
    },

    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/12.png'
    },

    {
      title: 'Bolso juvenil de Poly',
      subtitle: 'Bolso de poly impreso en serigrafía con cinta rigida de poliester y bolsillo interior',
      description: 'Largo: 39,5cm, Ancho: 36,5cm, Asa: 50cm, Ancho: 3,81cm',
      url: 'assets/images/13.png'
    },
  ]

  splitInGroups: Array<Array<Product>> = [];

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
          if(window.innerWidth > 700) {
            this.getSplitInGroups(3);
          }else {
            this.getSplitInGroups(1);
          }
    }
  constructor() { }

  ngOnInit(): void {  
    this.getSplitInGroups(3);
    this.getScreenSize();
  }

  getSplitInGroups(count: number) {
    let group: Array<Product> = [];
    this.splitInGroups = [];
    let index = 0;
    this.products.forEach((product: Product) => {
      if (index == count) {
        index = 0;
        this.splitInGroups.push(group);
        group = [].slice();
      }
      group.push(product);
      index++;
    })
    if (group.length > 0) {
      this.splitInGroups.push(group);
    }
  }
}
