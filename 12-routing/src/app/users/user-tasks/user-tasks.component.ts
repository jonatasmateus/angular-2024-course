import { Component, inject, OnInit } from '@angular/core';
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
  private usersService = inject(UsersService);
  private activetdRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // alt. way of getting userName and userId through out subscription.
    this.activetdRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
      },
    });
  }
}
