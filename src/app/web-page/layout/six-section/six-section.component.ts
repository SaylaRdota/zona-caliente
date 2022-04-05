import { Component, OnInit } from '@angular/core';
import { Product } from '../four-section/four-section.component';

@Component({
  selector: 'app-six-section',
  templateUrl: './six-section.component.html',
  styleUrls: ['./six-section.component.sass']
})
export class SixSectionComponent implements OnInit {

  products: Array<Product> = [
    {
      title: 'Dura Magaly',
      subtitle: 'Amet cillum excepteur laborum ipsum. Non deserunt eiusmod aliquip non deserunt. Aute ex anim eiusmod culpa nulla amet irure adipisicing Lorem minim elit quis. Excepteur excepteur anim et anim labore sunt irure do non proident officia deserunt eiusmod. Exercitation occaecat est culpa Lorem veniam nisi aute elit velit qui labore qui magna mollit. Elit magna esse adipisicing et excepteur in dolor ea ad magna exercitation. Deserunt anim nostrud qui amet veniam fugiat pariatur eu.',
      description: '',
      url: 'assets/images/1~3.png'
    },
  {
      title: 'Girasol',
      subtitle: 'Reprehenderit ullamco do excepteur velit labore tempor non ut nulla pariatur tempor ea. Ea veniam ad incididunt aliqua magna occaecat minim tempor. Amet incididunt aliquip enim nostrud dolor aliquip aliqua occaecat amet ea nisi.',
      description: '',
      url: 'assets/images/2~3.png'
    },
  {
      title: 'Dura Magaly',
      subtitle: 'Dolore magna incididunt pariatur proident et sint ea laborum id elit culpa. Mollit aute esse ullamco aliquip. Culpa id nostrud in enim minim sit esse cillum velit. Est amet veniam deserunt dolor eiusmod cupidatat proident. Adipisicing laboris laborum labore sunt tempor ut duis aliquip. Consequat pariatur eiusmod occaecat nisi. Magna ullamco quis magna nostrud pariatur fugiat nulla aliqua eu magna magna fugiat qui.',
      description: '',
      url: 'assets/images/1~3.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
