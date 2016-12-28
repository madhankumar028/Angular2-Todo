import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ComponentService {

    constructor (private http: Http) {}

    private baseUrl = 'http://apitodo.herokuapp.com/api/todos';

    getTodos() {
        return this.http.get(this.baseUrl)
                        .map(this.extractResponse)
                        .catch(this.handleError);
    }

    private extractResponse(res: Response) {
        let body = res.json();
        console.log(res);
        return body.data || {};
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
