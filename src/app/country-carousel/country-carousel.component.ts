import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-carousel',
  templateUrl: './country-carousel.component.html',
  styleUrl: './country-carousel.component.css'
})
export class CountryCarouselComponent implements OnInit, OnDestroy{
  images = [
    'https://getwallpapers.com/wallpaper/full/5/6/f/1120842-top-the-great-wall-of-china-wallpaper-1920x1080.jpg', 
    'https://wallpapercave.com/wp/wp2037801.jpg', 
    'https://hdqwalls.com/download/eiffel-tower-paris-beautiful-view-1s-1920x1080.jpg',
    'https://wallpaperaccess.com/full/3646920.jpg',
    'https://images3.alphacoders.com/737/thumb-1920-737916.jpg',
    'https://wallpaperaccess.com/full/825150.jpg',
    'https://wallpaper.dog/large/20388248.jpg',
    'https://wallpaperaccess.com/full/46564.jpg'

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