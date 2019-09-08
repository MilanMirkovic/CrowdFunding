import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';import { AddProjectComponent } from './add-project/add-project.component';

import { ProjectsOfCategoryComponent } from './projects-of-category/projects-of-category.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},  
 { path: 'project/:id',  component: ProjectDetailsComponent},
 {path:'filter/:id/:name', component: FilterProjectsComponent},
 {path: 'addproject', component: AddProjectComponent},
 {path: 'project/group/:id', component:ProjectsOfCategoryComponent},
 {path: 'register' , component: RegisterComponent},
   { path: 'login', component: LoginComponent},  
 
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
