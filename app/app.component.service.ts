import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComponentService {

    constructor (private http: Http) {}

    baseUrl = 'http://localhost:3004/Todos';

    /**
     * Performs a request with `get` http method.
     */
    getTodos() {
        return this.http.get(this.baseUrl);
    }

    /**
     * Performs a request with `post` http method.
     */
    addTodos(newTodo) {
        
        let body = {
            todo: newTodo
        };

        return this.http.post(this.baseUrl, body);
    }

    /**
     * Performs a request with `delete` http method.
     */
    deleteTodo(id) {
        return this.http.delete(this.baseUrl +'/'+ id);
    }
}
