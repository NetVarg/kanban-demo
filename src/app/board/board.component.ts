import { Component, OnInit } from '@angular/core';
import { BoardItem } from '../model/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tasks: BoardItem[] = [
    { value: 'feed the cat', isDone: false },
    { value: 'feed the dog', isDone: false },
  ];

  public newTask: string;

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('Added');
    const newItem: BoardItem = {
      isDone: false,
      value: this.newTask
    };

    this.tasks.push(newItem);
    this.newTask = '';
  }
}
