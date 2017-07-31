import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { Blog } from './blog.model';

@Injectable()

export class DataService {
    private apiUrl = 'http://localhost:8000/api/v1';

    constructor(private http: Http){
        console.log('dataService is initialized......');
    }

    getBlogs() {
        return this.http.get(`${this.apiUrl}/blogs`)
            .map(response => response.json());
    };

    getOneBlog(id) {
        return this.http.get(`${this.apiUrl}/blog/${id}`)
            .map(res => res.json());
    };

    // updateOneBlog(blog){
    //     return this.http.put()
    // }

    getAuthors(){
        return this.http.get(`${this.apiUrl}/authors`)
            .map(res => res.json());
    };

}


