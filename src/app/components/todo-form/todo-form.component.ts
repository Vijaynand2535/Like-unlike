import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todoservisec } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _todoService : todoservisec
  ) { }

  ngOnInit(): void {
  }
  onTodoAdd(todoForm : NgForm){
    if(todoForm.valid){
      let obj = todoForm.value
      this._todoService.createtodo(obj)
    }
    
    
  }
}
