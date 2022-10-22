import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    RectangleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
