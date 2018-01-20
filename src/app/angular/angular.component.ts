import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodoVO } from '../domain/todo-vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  todoList: Array<TodoVO>;
  newTodo: TodoVO = new TodoVO();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.userService.getTodoList()
    .subscribe((data: Array<TodoVO>) => 
    { console.log(data);
      this.todoList = data
    });
  }

  addTodo() {
    this.userService.addTodo(this.newTodo)
    .subscribe(data => console.log(data));
  }

}
