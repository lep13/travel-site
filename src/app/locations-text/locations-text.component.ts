import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-locations-text',
  templateUrl: './locations-text.component.html',
  styleUrls: ['./locations-text.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class LocationsTextComponent implements AfterViewInit {
  @ViewChild('text1') text1!: ElementRef;
  @ViewChild('text2') text2!: ElementRef;

  texts: string[] = ["Discover", "Captivating", "Locations", "And", "Regions"];
  morphTime: number = 2;
  cooldownTime: number = 0.25;

  private textIndex: number = this.texts.length - 1;
  private morph: number = 0;
  private cooldown: number = this.cooldownTime;
  private time: number = new Date().getTime();

  ngAfterViewInit(): void {
    console.log(this.text1, this.text2);
    this.text1.nativeElement.textContent = this.texts[this.textIndex % this.texts.length];
    this.text2.nativeElement.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
    this.animate();
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());

    const newTime = new Date().getTime();
    const shouldIncrementIndex = this.cooldown > 0;
    const dt = (newTime - this.time) / 1000;
    this.time = newTime;

    this.cooldown -= dt;

    if (this.cooldown <= 0) {
      if (shouldIncrementIndex) {
        this.textIndex++;
      }
      this.doMorph();
    } else {
      this.doCooldown();
    }
  }

  doMorph(): void {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / this.morphTime;

    if (fraction > 1) {
      this.cooldown = this.cooldownTime;
      fraction = 1;
    }

    this.setMorph(fraction);
  }

  doCooldown(): void {
    this.morph = 0;

    this.text2.nativeElement.style.filter = '';
    this.text2.nativeElement.style.opacity = '100%';

    this.text1.nativeElement.style.filter = '';
    this.text1.nativeElement.style.opacity = '0%';
  }

  setMorph(fraction: number): void {
    this.text2.nativeElement.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.text2.nativeElement.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    this.text1.nativeElement.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.text1.nativeElement.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    this.text1.nativeElement.textContent = this.texts[this.textIndex % this.texts.length];
    this.text2.nativeElement.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
  }
}
