import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeirectivesComponent } from './deirectives.component';

describe('DeirectivesComponent', () => {
  let component: DeirectivesComponent;
  let fixture: ComponentFixture<DeirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
