import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { TodoVO } from './domain/todo-vo';
import { Params } from '@angular/router';

@Injectable()
export class UserService {
private SERVER: string;
private headers: HttpHeaders;

constructor(private http: HttpClient) {
  this.SERVER = `${environment.HOST}`;
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
}

addTodo(params: TodoVO) {
  return this.http.post(this.SERVER + '/api/todo', JSON.stringify(params), {headers: this.headers});
}

getTodoList() {
  return this.http.get(this.SERVER + '/api/todo');
}

removeTodo(todo_id: number) {
  //return this.http.delete(this.SERVER + `/api/todo?todo_id=${todo_id}`);
  const params: Params = ({
    'todo_id': todo_id
  });
  return this.http.delete(this.SERVER + '/api/todo', {params: params});
}

modifyTodo(params: TodoVO) {
  return this.http.put(this.SERVER + '/api/todo', params, {headers: this.headers});
}

}
