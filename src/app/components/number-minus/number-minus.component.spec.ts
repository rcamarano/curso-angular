import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberMinusComponent } from './number-minus.component';

describe('NumberMinusComponent', () => {
  let component: NumberMinusComponent;
  let fixture: ComponentFixture<NumberMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberMinusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
