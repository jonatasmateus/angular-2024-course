import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();
  initialInvestment = '0'; // in $
  annualInvestment = '0'; // in $
  expectedReturn = '5'; // in %
  duration = '10'; // in month?

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });
  }
}