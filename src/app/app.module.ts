import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
