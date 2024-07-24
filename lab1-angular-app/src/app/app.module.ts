import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {
    constructor(private http: HttpClient) { }
}