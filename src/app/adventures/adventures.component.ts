import { Component } from '@angular/core';
@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.css'
})
export class AdventuresComponent {
  wonders = [
    {
      name: 'Great Pyramid of Giza',
      image: 'https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Taj Mahal',
      image: 'https://images.unsplash.com/photo-1626568940331-b9efa277b000?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Christ the Redeemer',
      image: ''
    },
    {
      name: 'Machu Picchu',
      image: 'assets/machu-picchu.jpg'
    },
    {
      name: 'Chichen Itza',
      image: 'assets/chichen-itza.jpg'
    },
    {
      name: 'Petra',
      image: 'assets/petra.jpg'
    },
    {
      name: 'The Great Wall of China',
      image: 'assets/great-wall.jpg'
    }
  ];
 

}


