import { Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  {
    path: 'tasks', // or depending, can be <your-domain>/tasks
    component: TasksComponent,
  },
];
