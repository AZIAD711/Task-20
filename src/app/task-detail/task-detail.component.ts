import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
  }
}

