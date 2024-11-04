import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', // <your-domain>/users/<uid>/tasks/new
        component: NewTaskComponent,
      },
    ],
  },
  {
    path: '**', // 'catch all routes'; this route is activated if no other route is met.
    component: NotFoundComponent,
  },
];
