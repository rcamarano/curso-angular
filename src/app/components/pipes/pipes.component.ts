import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  someTxt = 'HELLO WORLD';

  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}
