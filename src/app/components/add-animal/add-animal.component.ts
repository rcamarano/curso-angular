import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Animals } from '../../interfaces/Animals';
import { ListService } from '../../services/list.service';
// import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


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

  // SaveData() {
  //   // console.log(this.addAnimal.value);
  //   this.animal.saveAnimalData(this.addAnimal.value).subscribe((result) => {
  //     console.log(result);
  //   } );
  //   this.addAnimal.reset();
  // }
  SaveData() {
    // Antes de enviar os dados, consulte os animais existentes para obter o último ID
    this.animal.getLastAnimal().subscribe((animals) => {
      let lastId = 0;
      if (animals.length > 0) {
        lastId = animals[animals.length - 1].id;
      }
      
      // Incrementa o ID para o novo animal
      const newAnimal = { id: lastId + 1, ...this.addAnimal.value };

      // Salva o novo animal com o ID auto incrementado
      this.animal.saveAnimalData(newAnimal).subscribe((result) => {
        console.log(result);
      });
      
      // Limpa o formulário após salvar os dados
      this.addAnimal.reset();
    });
  }
}
