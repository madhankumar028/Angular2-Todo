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

    todos = [
        {name: 'Angular2'},
        {name: 'Angular1'},
        {name: 'git status'},
    ];

    add(todo: Object) {
        console.log('click event is trigered');
    }
}
