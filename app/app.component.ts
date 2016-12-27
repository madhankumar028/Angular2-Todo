import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ]
})

export class AppComponent {

    test: string = 'test';
    newTodo: any = [];
    todo: any;

    todos = [
        {name: 'Angular2'},
        {name: 'Angular1'},
        {name: 'git status'},
    ];

    add(todo) {
        this.newTodo.name = todo;
        this.todos.push(this.newTodo);
        this.todo = '';
    }

    delete(index) {
        this.todos.slice(index, 1);
    }
}
