import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-section',
  templateUrl: './five-section.component.html',
  styleUrls: ['./five-section.component.sass']
})
export class FiveSectionComponent implements OnInit {

  movil: boolean = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (window.innerWidth < 700) {
      this.movil = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
  }

}