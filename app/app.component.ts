import { Component } from '@angular/core';

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [
        `
        .input {
            width: 100%;
            padding: 8px 15px;
            font-size: 20px;
        }
        `
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
        console.log('click event is trigered');
    }

    delete(todo) {
        console.log(todo);
        let index = this.todos.indexOf(todo);
        this.todos.pop(index);
        console.log(index);
    }
}
