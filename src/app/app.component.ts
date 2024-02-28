import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Bonnie';
  userData = {
    email: 'bonnie@rmail.com',
    role: 'admin'
  };

  title = 'curso-angular';
}
