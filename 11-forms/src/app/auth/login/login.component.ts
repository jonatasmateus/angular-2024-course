import { afterNextRender, Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');

  constructor() {
    afterNextRender(() => {
      this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            ), // with that, this object will be stored in the local storage with every keystroke.
        });
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return; // if the form is empty, the form will not be submmitted.
    }

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log('Email: ' + enteredEmail, ', password: ' + enteredPassword);

    formData.reset();
  }
}
