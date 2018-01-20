import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodoVO } from '../domain/todo-vo';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('In', style({transform: 'translate(0, 0)'})),
      transition('void => *', [
      style({transform: 'translate(-100%, 0)'}),
      animate(300)
      ]),
      transition('* => void', [
      animate(300, style({transform: 'translate(0, -100%)', opacity: '0'}))
      ])
    ])      
  ]
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
    console.log('add_todo');
    this.userService.addTodo(this.newTodo)
    .subscribe(data => console.log(data));
  }

}
