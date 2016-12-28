import { Component } from '@angular/core';
import { ComponentService } from './app.component.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ],
    providers: [ComponentService]
})

export class AppComponent {

    constructor (private componentService: ComponentService) {}

    test: string = 'test';
    newTodo: any = [];
    todo: any;

    todos = [
        {name: 'Angular2'},
        {name: 'Angular1'},
        {name: 'git status'},
    ];

    getTodos() {
        this.componentService.getTodos();
        console.log();
    }

    add(todo) {
        this.newTodo.name = todo;
        this.todos.push(this.newTodo);
        this.todo = '';
    }

    delete(index) {
        this.todos.slice(index, 1);
    }
}
