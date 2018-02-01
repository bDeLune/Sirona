import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogItemFormComponent } from './log-item-form/log-item-form.component';
import { LogItemListComponent } from './log-item-list/log-item-list.component';
import { LogItemTableComponent } from './log-item-table/log-item-table.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserGraphComponent } from './user-graph/user-graph.component';
import { AuthGuard } from './authGuard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserGraphExcerciseComponent } from './user-graph-excercise/user-graph-excercise.component';
import { UserGraphMoodComponent } from './user-graph-mood/user-graph-mood.component';
import { UserGraphDietComponent } from './user-graph-diet/user-graph-diet.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent, data: { animation: 'tiger' } },
  { path: 'add', component: LogItemFormComponent, data: { animation: 'dolphin'} },
  { path: 'table', component: LogItemTableComponent, data: { animation: 'dolphin'}},
  { path: 'register', component: RegistrationFormComponent, data: { animation: 'dolphin'}},
  { path: 'profile', component: UserProfileComponent, data: { animation: 'dolphin'}},
  //{ path: 'graph', component: UserGraphComponent },
  { path: ':medium', component: LogItemListComponent, data: { animation: 'dolphin'}},
  { path: 'home', component: UserHomeComponent, data: { animation: 'dolphin'},canActivate: [AuthGuard]},
 // { path: 'excerciseGraph', component: UserGraphExcerciseComponent},
  //{ path: 'moodGraph', component: UserGraphMoodComponent, data: { animation: 'tiger' }},
  //{ path: 'dietGraph', component: UserGraphDietComponent, data: { animation: 'dolphin' }},
  {
    path: 'graph',
    component: UserGraphComponent,
   // canActivate: [AuthGuard], 
    children: [
      //{path: 'graph/overview', redirectTo: '/',pathMatch: 'full',},
      { path: '', redirectTo:'excerciseGraph', pathMatch:"full" },
      {path: 'excerciseGraph', component: UserGraphExcerciseComponent, data: { animation: 'dolphin' }},
      {path: 'moodGraph', component: UserGraphMoodComponent, data: { animation: 'dolphin' }},
      {path: 'dietGraph', component: UserGraphDietComponent, data: { animation: 'dolphin' }},  
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);