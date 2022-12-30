import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todoItem } from '../../interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todoItem?: todoItem;

  @Output() toggleCompleteEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();

  showDelete = false;

  changeCompleteStatus(id: number, toggle: string) {
    this.toggleCompleteEvent.emit({ id, toggle });
  }

  deleteSelectedItem(id: number) {
    this.deleteItemEvent.emit(id);
  }
}
