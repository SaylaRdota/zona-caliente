import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-section',
  templateUrl: './five-section.component.html',
  styleUrls: ['./five-section.component.sass']
})
export class FiveSectionComponent implements OnInit {

  title: string = 'Comercializadora por excelencia de la marca Solaris';

  constructor() { }

  ngOnInit(): void {
  }

}
