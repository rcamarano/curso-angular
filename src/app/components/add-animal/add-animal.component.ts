import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '../../interfaces/Animals';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent implements OnInit {
  // animal: Animals = {
  //   id: 0,
  //   name: '',
  //   type: '',
  //   age: 0,
  // };

  constructor(private animal: ListService) { }
  addAnimal=new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    age: new FormControl(0),
});

  ngOnInit() {
  }

  SaveData() {
    // console.log(this.addAnimal.value);
    this.animal.saveAnimalData(this.addAnimal.value).subscribe((result) => {
      console.log(result);
    } );
    this.addAnimal.reset();
  }

  // addAnimal(animal: Animals) {
  //   this.listService.addItem(animal);
  //   this.router.navigate(['/addAnimal']);
  // }

}
