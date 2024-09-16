import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Signal Inputs as an alternative to traditional Inputs
  avatar = input.required<string>();
  name = input.required<string>();

  // Since avatar property is a signal, we can use the computed function to get image path
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectedUser() {}
}
