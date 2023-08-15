import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { HtmlToTextPipe } from './pipe/html-to-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HomeComponent,
    HtmlToTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
