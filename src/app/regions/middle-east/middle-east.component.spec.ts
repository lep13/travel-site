import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleEastComponent } from './middle-east.component';

describe('MiddleEastComponent', () => {
  let component: MiddleEastComponent;
  let fixture: ComponentFixture<MiddleEastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleEastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
