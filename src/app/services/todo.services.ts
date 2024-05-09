import { Injectable, inject } from "@angular/core";
import { Itodo } from "../models/todo.interface";
import { UuidService } from "./uuid.service";
import { SnackbarService } from "./snackbar.service";


@Injectable({
    providedIn :   "root"
})
export class todoservisec{
   todoArr: Array<Itodo> = [
    {
        skill : "Javascript",
        id : "1"
    },
    {
        skill : "Angular",
        id :"2"
    },
    {
        skill : "Node",
        id : "3"
    }
   ]
   private _uuid = inject(UuidService)
   private _snackbar = inject(SnackbarService)
   
   constructor(){

   }
   

   fetchalltodos() : Array<Itodo>{
    // API call to fetch TODO data from DB
    return this.todoArr
   }

   createtodo(todo : Itodo){
    //API call to create new todo item
    todo = {...todo, id:this._uuid.Uuid()}
    this.todoArr.push(todo)
    this._snackbar.snackBar(`the new todo ${todo.skill} item is added to todolist`)
   }
   removeTodo(id : string){
    // API call to remove todo item from DB
    let getindex = this.todoArr.findIndex(todo => todo.id === id);
    this.todoArr.splice(getindex,1)
    this._snackbar.snackBar('the todo item is removed')
   }

   
}