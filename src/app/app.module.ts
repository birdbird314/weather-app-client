import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CitiesAdminComponent } from './cities-admin/cities.admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CitiesAdminComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
