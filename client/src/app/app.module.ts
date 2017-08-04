import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { DataService } from './services/dataService.service';
import { MessageService } from './services/messageService.service';
import 'rxjs/Rx';

import 
  { 
    SidebarComponent, 
    NavbarComponent, 
    MessageComponent,
    DashboardComponent, 
    BlogListComponent, 
    BlogComponent
  } from './components/index';
  
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MessageComponent,
    DashboardComponent,
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
