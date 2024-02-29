import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  show:  boolean = false;

  constructor () {}

  ngOnInit() {
    }

    showMessage(): void {
      this.show = !this.show;
    }
}
