import { Component, OnInit } from '@angular/core';

export class Section {
  id: number;
  images: Array<string>

  constructor(id: number, images: Array<string>) {
    this.id = id
    this.images = images
  }

}

export interface Image {
  img: string,
  background: string,
  padding: string | null
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.sass']
})
export class MainSectionComponent implements OnInit {
  title: string = 'Tenemos <br> todo <br> lo que <br> buscas <br> y más_';
  subtitleTitle = 'Nosotros';
  subtitleBody = `Lorem ipsum dolor sit amet, consectetur adipiscing
   elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
     mollit anim id est laborum.`;

  sections: Array<Section> = [
    new Section(1, [
        'assets/images/Grupo 13.png']
    ),
    new Section(2, [
      'assets/images/Grupo 100.png',
      'assets/images/_MG_9519.png'
    ]),
    new Section(3, [
      'assets/images/rect 6.png',
      'assets/images/rect 58.png',
      'assets/images/rect 114.png'
    ]),
     new Section(4, [
      'assets/images/Grupo 39.png',
      'assets/images/_MG_9627.png',
      'assets/images/_MG_9639.png',
      'assets/images/_MG_9662.png',
      'assets/images/_MG_9691.png',
    ]),
    new Section(5, [
      'assets/images/Grupo 11.png',
      'assets/images/_MG_9705.png',
      'assets/images/6.png'
    ]),
     new Section(6, [
      'assets/images/Componente 1 – 18.png'
    ]),
     new Section(7, [
      'assets/images/rect 6.png',
      'assets/images/rect 11.png',
      'assets/images/rect 58.png',
      'assets/images/rect 114.png'
    ]),
    new Section(8, [
      'assets/images/Grupo 101.png',
      'assets/images/IMG_0397.png'
    ]),
    new Section(9, [
      'assets/images/Grupo 99.png',
      'assets/images/rect 6.png',
      'assets/images/rect 58.png',
      'assets/images/rect 114.png'
    ]),
    new Section(10, [
      'assets/images/_MG_9639.png',
      'assets/images/_MG_9691.png',
      'assets/images/rect 6.png',
      'assets/images/rect 58.png',
      'assets/images/rect 114.png'
    ]),
    new Section(11, [
      'assets/images/Componente 5 – 11.png'
    ]),
  ];

  sectionRender: Array<string> = [];

  constructor() { }


  ngOnInit(): void {
    this.buildSectionRender();
    const sectionSize = this.sections.length;
    setInterval(() => {
      const randomSectionIndex = this.randomNumber(0, sectionSize);
      const sectionImagesSize =  this.sections[randomSectionIndex].images.length;
      const randomSectionImage: string =
      this.sections[randomSectionIndex].images[this.randomNumber(0, sectionImagesSize)];

      this.sectionRender[randomSectionIndex] = randomSectionImage;
    }, 1000)
  }

  randomNumber(min: number, max: number) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
  }

  getSectionImage(id: number) {
    let section: Section = new Section(0, []);
    this.sections.forEach(item => {
      if (item.id == id) {
        section = item
      }
    })
    return section.images[this.randomNumber(0, section.images.length)];
  }

  buildSectionRender() {
    this.sections.forEach((section: Section) => {
      this.sectionRender.push(section.images[0]);
    })
  }

}