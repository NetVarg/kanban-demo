import { Component, OnInit } from '@angular/core';
import { BoardItem } from '../model/board.model';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public newTask: string;

  public tasks$: Observable<BoardItem[]>;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;
  }

  public addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }

  public remove(id: number) {
    this.taskService.remove(id);
  }
}
