import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTask = '';

  ngOnInit(): void {
    this.loadTodos();
  }

  //add function
  addTodo() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };

      this.todos.push(newTodo);
      this.saveTodos();
      this.newTask = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  //delete todo
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }
}
