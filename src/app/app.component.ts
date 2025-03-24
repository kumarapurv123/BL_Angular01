import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:[FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoPath = './bl_logo.png';

  bridgeLabzURL = 'https://www.bridgelabz.com/'; 
  openBridgeLabz() {
    window.open(this.bridgeLabzURL, '_blank');
  }
  
  userName = '';
  errorMessage = '';

  validateName() {
    const isValid = /^[A-Z][a-z]{2,}$/.test(this.userName);
    this.errorMessage = isValid ? '' : 'Name must start with a capital letter and be at least 3 letters long.';
  }
}