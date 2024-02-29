import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiterComponent } from './emiter.component';

describe('EmiterComponent', () => {
  let component: EmiterComponent;
  let fixture: ComponentFixture<EmiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmiterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
