import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollEffectComponent } from './scroll-effect.component';

describe('ScrollEffectComponent', () => {
  let component: ScrollEffectComponent;
  let fixture: ComponentFixture<ScrollEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
