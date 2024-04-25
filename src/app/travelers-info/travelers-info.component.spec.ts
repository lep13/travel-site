import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelersInfoComponent } from './travelers-info.component';

describe('TravelersInfoComponent', () => {
  let component: TravelersInfoComponent;
  let fixture: ComponentFixture<TravelersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelersInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
