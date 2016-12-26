import { Component } from '@angular/core';

export class Todo {
    id: number;
    name: string;
}

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [
        `
        .input {
            width: 80%;
            padding: 8px 15px;
            font-size: 20px;
        }
        `

    ]
})

export class AppComponent {
    test: string = 'test';

    todos: Todo[] = [
        {id: 1, name: 'Angular2'},
        {id: 2, name: 'Angular1'},
        {id: 3, name: 'git status'},
    ];

    add() {
        console.log('click event is trigered');
    }
}
