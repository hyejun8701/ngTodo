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

  // 수정 시 담을 컬렉션
  tempTodoList = new Map<number, TodoVO>();

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
    .subscribe((data:TodoVO) => this.todoList.unshift(data));
  }

  // 템플릿 폼을 에디터로 전환
  save(item: TodoVO) {
    item.isEdited = true;
    // 기존값 저장: shallow copy(x), deep copy(o)
    // 1. shallow copy
    // this.tempTodoList.set(item.todo_id, item);
    // 2. deep copy
    const newTodo = new TodoVO();
    newTodo.isFinished = item.isFinished;
    newTodo.todo = item.todo;
    this.tempTodoList.set(item.todo_id, newTodo);
  }

  // 서버에서 데이터 삭제
  remove(item: TodoVO) {

  }

  // 서버에서 데이터 수정
  modify(item: TodoVO) {

  }

  // 에디터 폼을 원래대로 복귀
  restore(item: TodoVO) {
    item.isEdited = false;
    const todoVO = this.tempTodoList.get(item.todo_id);
    item.isFinished = todoVO.isFinished;
    item.todo = todoVO.todo;
  }
}
