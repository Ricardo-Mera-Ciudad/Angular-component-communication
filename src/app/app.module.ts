import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentCommModule } from './component-comm/component-comm.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentCommModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
