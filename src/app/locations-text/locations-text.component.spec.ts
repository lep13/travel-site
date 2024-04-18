import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTextComponent } from './locations-text.component';

describe('LocationsTextComponent', () => {
  let component: LocationsTextComponent;
  let fixture: ComponentFixture<LocationsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
