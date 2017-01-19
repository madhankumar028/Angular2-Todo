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

    addTodo(addNewTodo) {
        
        this.componentService.addTodos(addNewTodo)
            .subscribe(data => {
                this.todo.push(data.json().todo);
            });
        this.newTodo = '';
    }

    deleteTodo(index) {
        
        let delTodo = this.todo[index]._id;
        
        this.componentService.deleteTodo(delTodo)
            .subscribe();
        
        this.ngOnInit();
    }
}
