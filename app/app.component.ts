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

    todo: any;

    ngOnInit() {
        this.componentService.getTodos()
            .subscribe(data => {
                this.todo = data.json().todo;
            });
    }

    addTodo (newTodo) {
        this.componentService.addTodos(newTodo)
            .subscribe(data => {
                this.todo.push(data.json().todo);
            })
    }

    deleteTodo(index) {

    }
}
