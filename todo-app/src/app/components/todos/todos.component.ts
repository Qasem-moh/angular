import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Learn React',
      completed: false
    },
    {
      id: 3,
      title: 'Learn Vue',
      completed: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
