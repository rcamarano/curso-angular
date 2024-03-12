import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cars } from '../../interfaces/Cars';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail-car',
  templateUrl: './item-detail-car.component.html',
  styleUrl: './item-detail-car.component.css'
})
export class ItemDetailCarComponent {
  car?: Cars;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getCar();
   }

  ngOnInit(): void {
}
getCar(){
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.listService.getCarItem(id).then((car) => this.car = car);
}
}