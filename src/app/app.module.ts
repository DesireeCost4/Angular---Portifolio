import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { NavCardComponent } from './components/nav-card/nav-card.component';
import { PicCardComponent } from './components/pic-card/pic-card.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { CardSkilsComponent } from './components/card-skils/card-skils.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    NavCardComponent,
    PicCardComponent,
    ProjectsCardComponent,
    CardSkilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
