import { Component, OnInit, inject } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';
import { todoservisec } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr !: Array<Itodo>
  private _todoService = inject(todoservisec)

  constructor(
    // private _todoService  : todoservisec
  ) { }

  ngOnInit(): void {
    
    this.todoArr = this._todoService.fetchalltodos();
  }
  onDelete(id : string){
    console.log(id);

    this._todoService.removeTodo(id)
    
  }
}
