import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!', // with this, it's possible set this property in components as an input binding, through withComponentInputBinding() called in app.config.ts
    }
  },
  {
    path: '**', // 'catch all routes'; this route is activated if no other route is met.
    component: NotFoundComponent,
  },
];
