import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailCarComponent } from './item-detail-car.component';

describe('ItemDetailCarComponent', () => {
  let component: ItemDetailCarComponent;
  let fixture: ComponentFixture<ItemDetailCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
