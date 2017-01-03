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
                console.log(data);
                console.log(this.todo = data.json().todo);
            });
    }

    delete(index) {
        
    }
}
