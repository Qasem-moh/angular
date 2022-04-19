import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos = [{id: 1, name: "Qasem", completed: false},
    {id: 2, name: "Ali", completed: false},
    {id: 3, name: "Ahmed", completed: false},
    {id: 4, name: "Hassan", completed: false},
    {id: 5, name: "KHALED", completed: false},
    {id: 6, name: 'Mohammad', completed: false},
    {id: 7, name: "Sami", completed: false},
    {id: 8, name: "Sara", completed: false},
    {id: 9, name: "Samer", completed: false},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
