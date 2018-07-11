import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DiaorsServiceService } from './providers/diaors-service.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [DiaorsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
