import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: boolean = true;
  name = 'John Low';

  constructor() { }

  OnInit() {
    }

}
