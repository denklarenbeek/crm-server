import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Blog } from './blog.model';

@Injectable()

export class DataService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: Http){

    }

    getBlogs(): Promise<Blog[]> {
        return this.http.get('http://localhost:3000/posts')
            .toPromise()
            .then((response) => response.json().data as Blog[]);
    }
}


