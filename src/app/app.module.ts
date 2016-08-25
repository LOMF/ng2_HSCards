//Creating our Application Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
//import { CustomInputComponent } from './custom-input.component';
 // Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@NgModule({
    imports: [BrowserModule, FormsModule]
    ,declarations: [AppComponent]
    ,providers: [HTTP_PROVIDERS]
    ,bootstrap: [AppComponent]
})
export class AppModule {}