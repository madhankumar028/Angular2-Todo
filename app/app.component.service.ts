import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

// Todo: have to add few things  for observable
@Injectable()
export class ComponentService {

    constructor (private http: Http) {}

    private baseUrl = 'http://apitodo.herokuapp.com/api/todos';

    getTodos() {
        return this.http
           .get(this.baseUrl)
           .map(response => response.json());
    }

    // Todo: Once the observable configured, this area's comment will get removed.
    
    // private extractResponse(res: Response) {
    //     let body = res.json();
    //     console.log(res);
    //     return body.data || {};
    // }
    //
    // private handleError (error: Response | any) {
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }
}
