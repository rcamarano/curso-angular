import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '../../interfaces/Animals';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent implements OnInit {
  animal: Animals = {
    id: 0,
    name: '',
    type: '',
    age: 0,
  };

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
  }

  addAnimal(animal: Animals) {
    this.listService.addItem(animal);
    this.router.navigate(['/addAnimal']);
  }

}
