import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.sass']
})
export class SecondSectionComponent implements OnInit {

  text1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam,` ;

  text2: string = `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam,` ;

   hoveredSession = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
