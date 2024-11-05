import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName = '';
  message = input.required<string>();
  private usersService = inject(UsersService);
  private activetdRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('Input data: ' + this.message());
    // alt. way of getting userName and userId through out subscription.
    this.activetdRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
      },
    });
  }
}
