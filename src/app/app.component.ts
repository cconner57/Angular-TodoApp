import { Component } from '@angular/core';
import { todoItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList = [
    { id: 1, completed: false, text: 'Jog around the park1' },
    { id: 2, completed: false, text: 'Jog around the park2' },
    { id: 3, completed: false, text: 'Jog around the park3' },
    { id: 4, completed: true, text: 'Jog around the park4' },
  ];
  public activeTodoList = this.todoList.filter((item) => !item.completed);
  completedTodoList = this.todoList.filter((item) => item.completed);
  selectedList = 'All';

  addNewItem({ id, text, completed }: todoItem): void {
    this.activeTodoList.unshift({ id, text, completed });
  }

  toggleItemStatus({ id, toggle }: { id: number; toggle: string }): void {
    if (toggle === 'checked') {
      let todo = this.activeTodoList.find((item) => item.id === id);
      this.activeTodoList = this.activeTodoList.filter(
        (item) => item.id !== id
      );
      this.completedTodoList.push({ id, completed: true, text: todo!.text });
    }
    if (toggle === 'unchecked') {
      let todo = this.completedTodoList.find((item) => item.id === id);
      this.completedTodoList = this.completedTodoList.filter(
        (item) => item.id !== id
      );
      this.activeTodoList.push({ id, completed: false, text: todo!.text });
    }
  }

  changeSelectedList(selected: string): void {
    this.selectedList = selected;
  }

  clearCompletedList(): void {
    this.completedTodoList = [];
  }

  deleteSelectedItem(id: number): void {
    this.activeTodoList = this.activeTodoList.filter((item) => item.id !== id);
  }
}
