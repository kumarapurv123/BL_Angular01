import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports:[FormsModule],
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
}