import { Component, OnInit } from '@angular/core';
import { ComponentService } from './app.component.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ],
    providers: [ComponentService]
})

export class AppComponent implements OnInit {

    constructor(private componentService: ComponentService) {}

    todo = [];
    newTodo = '';

    ngOnInit() {
        
        this.componentService.getTodos()
            .subscribe(data => {
                this.todo = data.json().todo;
            });
    }

    addTodo (addNewTodo) {
        
        this.componentService.addTodos(addNewTodo)
            .subscribe(data => {
                this.todo.push(data.json().todo);
            });
        this.newTodo = '';
    }

    deleteTodo(index) {
        
        var delTodo = this.todo[index];
        var delTodoId = delTodo._id;

        this.componentService.deleteTodo(delTodoId)
            .subscribe();
        
        this.ngOnInit();
    }
}
