import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '../../interfaces/Animals';
import { Cars } from '../../interfaces/Cars';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  animal?: Animals;
  car?: Cars;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
   }

  ngOnInit(): void {
}
getAnimal(){
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.listService.getItam(id).subscribe((animal) => this.animal = animal);
}
}
