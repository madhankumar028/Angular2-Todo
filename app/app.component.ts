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
                console.log(data.json());
                this.todo = data.json();
            });
    }

    addTodo(addNewTodo) {       
        
        this.componentService.addTodos(addNewTodo)
            .subscribe(data => {
                this.todo.push(data.json());
            });
        this.newTodo = '';
    }

    deleteTodo(index) {
        
        let delTodo = this.todo[index].id;
        this.componentService.deleteTodo(delTodo)
            .subscribe();
        this.ngOnInit();
    }
}
