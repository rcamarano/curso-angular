import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() userData!: {email: string; role: string};

  constructor() {}

  ngOnInit() {}
}
