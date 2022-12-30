import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
