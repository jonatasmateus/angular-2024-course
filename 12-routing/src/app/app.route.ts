import { Routes } from '@angular/router';

import { TaskComponent } from './tasks/task/task.component';

export const routes: Routes = [
  {
    path: 'tasks', // or depending, can be <your-domain>/tasks
    component: TaskComponent,
  },
];
