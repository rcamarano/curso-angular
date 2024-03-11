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

  SaveData() {
    this.car.saveCarData(this.addCar.value).subscribe((result) => {
      console.log(result);
    } );
    this.addCar.reset();
  }

}
