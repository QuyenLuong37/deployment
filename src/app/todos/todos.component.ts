import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getAll().subscribe(res => {
      console.log('res: ', res);
      this.todos = res;
    })
  }

}
