import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  template: `<h1>{{ username }}</h1>`,
})
export class TasksComponent {
    @Input({ required: true }) username!: string;
}
