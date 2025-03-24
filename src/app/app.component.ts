import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
  
}