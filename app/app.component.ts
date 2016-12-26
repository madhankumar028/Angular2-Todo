import { Component } from '@angular/core';

@Component({

    selector: 'my-app',
    template: `
        <div class="row">
            <div class="col-sm-12">
                <div class="jumbotron text-center">
                    <h1>Angular2 TodoApp <span class="badge">1</span></h1>
                </div>
            </div>
        </div>
        <div class="todoDetails text-center" *ngFor="let list of todo">
            <input type="checkbox"/> {{list.name}}
        </div>
        <button class="btn btn-primary text-center" (click)=add()>Add</button>
    `
})

export class AppComponent {
    test = 'test';

    todo = [
        {name: 'Angular2'},
        {name: 'Angular1'},
        {name: 'git status'},
    ];
    add() {
        console.log('click event is trigered');
    }
}
