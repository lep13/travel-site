import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-carousel',
  templateUrl: './country-carousel.component.html',
  styleUrl: './country-carousel.component.css'
})
export class CountryCarouselComponent implements OnInit, OnDestroy{
  images = [
    'https://static.vecteezy.com/system/resources/previews/001/116/378/large_2x/beijing-great-wall-of-china-photo.jpg', 
    'https://wallpaperaccess.com/full/8231407.jpg', 
    'https://i.pinimg.com/originals/09/0c/6e/090c6e54764437fc0bc456c3acea2a25.jpg',
    'https://wallpapercave.com/wp/wp7921787.jpg',
    'https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyaiUyMGFsJTIwYXJhYnxlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://th.bing.com/th/id/R.cf72afde332d8c0b1b0e9408b41a25bc?rik=4mtSPXoUiWvKLQ&riu=http%3a%2f%2fwww.radionz.co.nz%2fassets%2fnews%2f65507%2feight_col_riyadh_at_night.jpg%3f1460949321&ehk=o0fONNg4CchF%2f1a0K5hK8NI4eq4SHYElZA8Q3sHdCNA%3d&risl=&pid=ImgRaw&r=0',
    'https://w0.peakpx.com/wallpaper/51/723/HD-wallpaper-statue-of-liberty-clouds-liberty-new-york-sky-statue.jpg',
    'https://i.pinimg.com/originals/6f/bc/b6/6fbcb6c3b964126a9cb11356df3695e3.jpg'
  ];
  currentImageIndex = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Images will change every 2 seconds
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

}
