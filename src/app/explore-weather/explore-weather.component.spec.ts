import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreWeatherComponent } from './explore-weather.component';

describe('ExploreWeatherComponent', () => {
  let component: ExploreWeatherComponent;
  let fixture: ComponentFixture<ExploreWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
