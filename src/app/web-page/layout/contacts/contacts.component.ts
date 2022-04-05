import { Component, OnInit } from '@angular/core';

export interface Link {
  text: string;
  url: string;
}

export interface Social {
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  links: Array<Link> = [
    {
      text: 'Legal',
      url: 'https://google.com'
    },
   {
      text: 'Contáctenos',
      url: 'https://google.com'
    }
  ];

  us: string = 'Dolor cillum pariatur sunt cupidatat voluptate pariatur consectetur pariatur aute magna officia. Quis nulla eu ea ad voluptate irure velit aliqua. Excepteur consequat veniam sit ex.';
  address: string = 'Correa #159 e/ San Beningo y Fores. Santo Suárez. Diez de Octubre';
  phones: Array<string> = [
    '+53 7 649 03 64',
    '+53 7 893 50 03'
  ];
  emails: Array<string> = [
    'tallerfrometa@gmail.com'
  ];
  socials: Array<Social> = [
    {
      url: 'https://google.com',
      icon: 'fa fa-facebook-official'
    },
    {
      url: 'https://google.com',
      icon: 'fa fa-instagram'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
