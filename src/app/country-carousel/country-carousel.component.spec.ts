import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCarouselComponent } from './country-carousel.component';

describe('CountryCarouselComponent', () => {
  let component: CountryCarouselComponent;
  let fixture: ComponentFixture<CountryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
