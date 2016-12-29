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

    newTodo: any = [];
    todo: any;

    todos = [ 'Angular2', 'Angular1', 'git status' ];

    // Todo: Yet to add few more things to complete it.
    getTodos() {
        this.componentService.getTodos();
    }

    add(todo) {
        this.newTodo = todo;
        this.todos.push(this.newTodo);
        this.todo = '';
    }

    delete(index) {
        this.todos.splice(index, 1);
    }
}
