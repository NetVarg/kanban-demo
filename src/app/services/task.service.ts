import { Injectable } from '@angular/core';
import { BoardItem } from '../model/board.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: BoardItem[] = [
    { id: 1, value: 'feed the cat', isDone: false },
    { id: 2, value: 'feed the dog', isDone: false },
  ];

  private tasksSubject: BehaviorSubject<BoardItem[]> = new BehaviorSubject(this.tasks);

  public get tasks$(): Observable<BoardItem[]> {
    return this.tasksSubject.asObservable();
  }

  public addTask(newTask: string) {
    let hightesId = 1;
    if (this.tasks.length !== 0) {
      hightesId = Math.max(...this.tasks.map(x => x.id));
    }

    const newItem: BoardItem = {
      id: ++hightesId,
      isDone: false,
      value: newTask
    };

    this.tasks.push(newItem);
    this.tasksSubject.next(this.tasks);
  }

  public remove(id: number) {
    this.tasks = this.tasks.filter(x => x.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}
