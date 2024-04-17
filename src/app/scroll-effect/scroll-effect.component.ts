import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-effect',
  templateUrl: './scroll-effect.component.html',
  styleUrls: ['./scroll-effect.component.css']
})
export class ScrollEffectComponent implements AfterViewInit {
  // navbarHeight = 110;
  heroHeight: number;
  heroElement: HTMLElement;
  isHeroFixed = false;

  ngAfterViewInit(): void {
    this.heroElement = document.querySelector('.hero-nav') as HTMLElement;
    this.heroHeight = this.heroElement.offsetHeight;
    this.heroElement.parentElement!.style.paddingTop = `${this.heroHeight}px`;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    requestAnimationFrame(this.adjustHeroHeight.bind(this));
  }
  
  adjustHeroHeight(): void {
    const scrollOffset = window.scrollY;
    if (scrollOffset < this.heroHeight) {
      this.heroElement.style.height = `${this.heroHeight - scrollOffset}px`;
    }
    if (scrollOffset > (this.heroHeight - 215)) {
      this.heroElement.classList.add('fixme');
    } else {
      this.heroElement.classList.remove('fixme');
    }
  }
}  
