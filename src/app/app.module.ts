import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { NewReactiveAccountComponent } from './new-reactive-account/new-reactive-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    WelcomeComponent,
    NewReactiveAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: "account/new", component: NewAccountComponent },
      { path: "account/new-reactive", component: NewReactiveAccountComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
