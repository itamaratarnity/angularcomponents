import { Component } from '@angular/core';
import { CalcComponent } from '../calc/calc.component';

@Component({
  selector: 'app-main',
  imports: [CalcComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  content: string = 'Welcome to the main content area.';  
  title: string = 'Main Content Section';
}
