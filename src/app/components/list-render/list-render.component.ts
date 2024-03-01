import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  animals = [
    { name: 'Jade', type: 'Dog', age: 3},
    { name: 'Mel', type: 'Cat', age: 2},
    { name: 'Puggy', type: 'Pig', age: 1},
  ];
  cars = [
    { brand: 'Mitsubishi', model: 'FiOOutlanderuesta', year: 2010},
    { brand: 'Toyota', model: 'Corola', year: 2000},
  ]

  constructor() { }

  ngOnInit(): void {}

}
