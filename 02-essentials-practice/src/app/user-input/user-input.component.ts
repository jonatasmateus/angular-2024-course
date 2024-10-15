import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0'; // in $
  annualInvestment = '0'; // in $
  expectedReturn = '5'; // in %
  duration = '10'; // in month?

  onSubmit() {
    console.log(
      'initialInvestment: ' +
        this.initialInvestment +
        '\n' +
        'annualInvestment: ' +
        this.annualInvestment +
        '\n' +
        'expectedReturn: ' +
        this.expectedReturn +
        '\n' +
        'duration: ' +
        this.duration
    );
  }
}
