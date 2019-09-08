import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './security/authentication.service';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { JwtUtilsService } from './security/jwt-utils.service';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainComponent } from './main/main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SafePipe } from './project-details/SafePipe';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { ProjectsOfCategoryComponent } from './projects-of-category/projects-of-category.component';
import { FooterComponent } from './footer/footer.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    SafePipe,

  
    NavigationBarComponent,
  
    MainComponent,
  
    ProjectDetailsComponent,
  
    FilterProjectsComponent,
  
    ProjectsOfCategoryComponent,
  
    FooterComponent,
  
    AddProjectComponent,
  
    RegisterComponent
  
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
