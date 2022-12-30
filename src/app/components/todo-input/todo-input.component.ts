import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todoItem } from '../../interfaces';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  public textValue!: string;

  @Input() todoList!: todoItem[];
  @Output() addNewItemEvent = new EventEmitter();

  addTodo() {
    this.addNewItemEvent.emit({
      id: this.todoList.length + 1,
      text: this.textValue,
      completed: false,
    });
  }
}
