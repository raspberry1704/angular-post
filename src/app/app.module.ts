import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Post } from './types/Post';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilViewComponentComponent } from './appareil-view-component/appareil-view-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthentificationComponent,
    AppareilViewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
