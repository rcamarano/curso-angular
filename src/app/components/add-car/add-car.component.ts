import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit{

  constructor(private car: ListService) { }
  addCar=new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(0),
});

  ngOnInit() {
  }

  // SaveData() {
  //   this.car.saveCarData(this.addCar.value).subscribe((result) => {
  //     console.log(result);
  //   } );
  //   this.addCar.reset();
  // }
  SaveData() {
    // Antes de enviar os dados, consulte os animais existentes para obter o último ID
    this.car.getLastCar().subscribe((cars) => {
      let lastId = 0;
      if (cars.length > 0) {
        lastId = cars[cars.length - 1].id;
      }
      
      // Incrementa o ID para o novo animal
      const newCar = { id: lastId + 1, ...this.addCar.value };

      // Salva o novo animal com o ID auto incrementado
      this.car.saveCarData(newCar).subscribe((result) => {
        console.log(result);
      });
      
      // Limpa o formulário após salvar os dados
      this.addCar.reset();
    });
  }
}
