import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todoItem } from '../../interfaces';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent {
  @Input() selectedList!: string;
  @Input() todoCount!: number | undefined;

  @Output() filterEvent = new EventEmitter();
  @Output() clearCompletedEvent = new EventEmitter();

  changeSelectedItems(value: string) {
    this.filterEvent.emit(value);
  }

  clearCompletedItems() {
    this.clearCompletedEvent.emit();
  }
}
