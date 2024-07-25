import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  
}
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
