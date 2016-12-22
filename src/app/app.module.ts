import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/*
 * Services
 */
import {ApiService} from './services/ApiService';
import {ViewPortService} from './services/ViewPortService';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    ViewPortService,
    {provide: 'ApiServiceAlias', useExisting: ApiService},
    {
      provide: 'SizeService', 
      useFactory: (viewPort: any) => {
        return viewPort.determineService();
      },
      deps: [ViewPortService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
