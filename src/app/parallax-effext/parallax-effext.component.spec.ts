import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxEffextComponent } from './parallax-effext.component';

describe('ParallaxEffextComponent', () => {
  let component: ParallaxEffextComponent;
  let fixture: ComponentFixture<ParallaxEffextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParallaxEffextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxEffextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
