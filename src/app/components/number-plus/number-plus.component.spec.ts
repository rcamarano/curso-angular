import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPlusComponent } from './number-plus.component';

describe('NumberPlusComponent', () => {
  let component: NumberPlusComponent;
  let fixture: ComponentFixture<NumberPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberPlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
