import { Injectable } from '@angular/core';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: false },
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
