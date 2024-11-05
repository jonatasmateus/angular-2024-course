import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveTitle, resolveUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMacth: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  return Math.random() < 1 ? true : new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', // <your-domain>
    component: NoTaskComponent,
    title: 'No task selected'
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    canMatch: [dummyCanMacth],
    children: userRoutes,
    data: {
      message: 'Hello!', // with this, it's possible set this property in components as an input binding, through withComponentInputBinding() called in app.config.ts
    },
    resolve: {
      userName: resolveUserName, // with this, it's possible, as the same logic of 'data' property, passing data, but in a dynamic way. 
    },
    title: resolveTitle
  },
  {
    path: '**', // 'catch all routes'; this route is activated if no other route is met.
    component: NotFoundComponent,
  },
];
