import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './components/auth/register-user.component';

const routes: Routes = [
  {path: "", redirectTo: "auth", pathMatch: "full"},
  {path: 'auth', component: RegisterUserComponent},
  {path: 'budget/auth', component: RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
