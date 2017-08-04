import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { Blog } from './blog.model';

@Injectable()

export class DataService {
    private apiUrl = 'http://localhost:8000/api/v1';
    private headers = new Headers({'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers});

    constructor(private http: Http){
        console.log('dataService is initialized......');
    }

    

    getBlogs() {
        return this.http.get(`${this.apiUrl}/blogs`, this.options)
            .map(response => response.json());
    };

    getOneBlog(id) {
        return this.http.get(`${this.apiUrl}/blog/${id}`, this.options)
            .map(res => res.json());
    };

    createOneBlog(blog){
        return this.http.post(`${this.apiUrl}/blog`, blog, this.options)
            .map(res => res.json());
    }

    updateOneBlog(blog){
        return this.http.put(`${this.apiUrl}/blog/${blog._id}`, blog, this.options)
            .map(res => res.json());
    };

    getAuthors(){
        return this.http.get(`${this.apiUrl}/authors`, this.options)
            .map(res => res.json());
    };

}


